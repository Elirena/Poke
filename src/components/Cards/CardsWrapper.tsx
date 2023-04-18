import React, {useEffect, useState} from 'react';
import CardsPanel from "./CardsPanel";
import {ICard} from "../../models/ICard";
import {cardAPI} from "../../services/CardService";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {listSlice} from "../../store/reducers/ListSlice";
import { Space } from 'antd';
import StatusNotifications from "../UIKit/StatusNotifications";


/*** Filter Helpers */
const getFilteredByType = (cards: ICard[], typesFilter: []) =>
    cards.filter(el => el.types?.find(({type: {name}}) => typesFilter.includes(name)));

const getFilteredBySearch = (cards: ICard[], searchFilter: string) =>
    cards.filter((el) => el.name === searchFilter);
/*** */

const CardsWrapper = () => {
    const {itemsPerPage, offset, typesFilter, searchFilter} = useAppSelector(state => state.listReducer)
    const {setTotalCardsCount} = listSlice.actions;
    const dispatch = useAppDispatch();

    const [totalCards, setTotalCards] = useState<ICard[]>([])

    //get only-names card list
    const {data: cards, error, isLoading} = cardAPI.useFetchAllCardsQuery({limit: itemsPerPage, offset});

    useEffect(() => {
        if(cards) {
            setTotalCards(cards.results)
            dispatch(setTotalCardsCount(cards.count))
        }
    }, [typesFilter, cards, setTotalCardsCount, dispatch])

    //get full-info cards list
    const {cards: fullCards} = useAppSelector(state => state.listReducer)

    useEffect(() => {
        const filteredCards = () => {
            switch (true) {
                case (searchFilter && typesFilter?.length > 0):
                    return getFilteredByType(getFilteredBySearch(fullCards, searchFilter), typesFilter);
                case (searchFilter && typesFilter?.length === 0):
                    return (getFilteredBySearch(fullCards, searchFilter));
                case (typesFilter?.length > 0):
                    return getFilteredByType(fullCards, typesFilter);
                case (!searchFilter && typesFilter?.length === 0 && fullCards?.length === itemsPerPage - 1):
                    return fullCards;
                default:
                    return cards?.results || [];
            } 
        }
        setTotalCards(filteredCards())

    }, [cards?.results, fullCards, itemsPerPage, searchFilter, typesFilter])

    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            {isLoading
                ? <StatusNotifications status={'loading'} />
                : <CardsPanel cards={totalCards}/>
            }
            {!totalCards.length &&
                <StatusNotifications status={'empty'} />
            }
            {error &&
                <StatusNotifications status={'error'} />
            }
        </Space>
    );
};

export default CardsWrapper;