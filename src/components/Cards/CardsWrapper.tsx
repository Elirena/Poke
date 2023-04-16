import React from 'react';
import CardsPanel from "./CardsPanel";
import {cardAPI} from "../../services/CardService";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {listSlice} from "../../store/reducers/ListSlice";
import { Space } from 'antd';

const CardsWrapper = () => {
    const {itemsPerPage, offset} = useAppSelector(state => state.listReducer)
    const {setTotalCardsCount} = listSlice.actions;
    const dispatch = useAppDispatch();

    const {data: cards, error, isLoading} = cardAPI.useFetchAllCardsQuery({limit: itemsPerPage, offset});
    cards && dispatch(setTotalCardsCount(cards.count))

    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Loading page error</h1>}
            {cards && <CardsPanel cards={cards.results} />}
        </Space>
    );
};

export default CardsWrapper;