import React, {useEffect, useState} from 'react';
import CardsPanel from "./CardsPanel";
import {ICard} from "../../models/ICard";
import {cardAPI} from "../../services/CardService";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {listSlice} from "../../store/reducers/ListSlice";
import { Space, Typography } from 'antd';

const { Text } = Typography;

const CardsWrapper = () => {
    const {itemsPerPage, offset, typesFilter} = useAppSelector(state => state.listReducer)
    const {setTotalCardsCount} = listSlice.actions;
    const dispatch = useAppDispatch();

    const [totalCards, setTotalCards] = useState<ICard[]>([])

    // only-names card list
    const {data: cards, error, isLoading} = cardAPI.useFetchAllCardsQuery({limit: itemsPerPage, offset});

    useEffect(() => {
        if(cards) {
            setTotalCards(cards.results)
            dispatch(setTotalCardsCount(cards.count))
        }
    }, [typesFilter, cards, setTotalCardsCount, dispatch])

    // full-info cards list
    const {cards: fullCards} = useAppSelector(state => state.listReducer)

    useEffect(() => {
        if(typesFilter.length) {
            const filteredCards = fullCards
                .filter(el => el.types?.find(({type: {name}}) => typesFilter.includes(name) ))
            setTotalCards(filteredCards)
        }
    }, [cards?.results, fullCards, typesFilter])

    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            {isLoading
                ? <h1><Text type="warning">Loading...</Text></h1>
                : <CardsPanel cards={totalCards}/>
            }
            {!totalCards.length &&
                <h4>No pokemon found on this page </h4>
            }
            {error &&
                <h1>
                    <Text type="danger">Loading page error</Text>
                </h1>
            }
        </Space>
    );
};

export default CardsWrapper;