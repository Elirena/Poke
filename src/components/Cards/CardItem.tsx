import React, {FC} from 'react';
import {cardAPI} from "../../services/CardService";
import CardDetails from "./CardDetails";
import {Collapse} from "antd";
import {listSlice} from "../../store/reducers/ListSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

interface IProp {
    name: string;
}
const CardItem: FC<IProp> = ({name}) => {
    const {addNewCard} = listSlice.actions;
    const dispatch = useAppDispatch();

    const {data: card, isLoading, error} = cardAPI.useFetchCardQuery(name);

    if (isLoading) {
        return <div>loading...</div>;
    }
    if (error) {
        return <div>Error</div>;
    }

    dispatch(addNewCard(card));

    return (
        <div>
            {name}
        </div>
    );
};

export default CardItem;