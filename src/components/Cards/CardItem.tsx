import React, {FC} from 'react';
import {cardAPI} from "../../services/CardService";
import {listSlice} from "../../store/reducers/ListSlice";
import {useAppDispatch} from "../../hooks/redux";
import { Typography } from 'antd';
import StatusNotifications from "../UIKit/StatusNotifications";

const { Text } = Typography;

interface IProp {
    name: string;
}

const CardItem: FC<IProp> = ({name}) => {
    const {addNewCard} = listSlice.actions;
    const dispatch = useAppDispatch();

    const {data: card, isLoading, error} = cardAPI.useFetchCardQuery(name);

    if (isLoading && !card) {
        return <StatusNotifications status={'loading'} />
    }
    if (error) {
        return <StatusNotifications status={'error'} />
    }

    dispatch(addNewCard(card));

    return (
        <div className="card">
            <img src={`${card.sprites.front_default}`} height='80px' />
            <span>{name}</span>
           {card.types.map((el: any) => (
               <span>/
                   <Text mark>{el.type.name}</Text>
               </span>
           ))}
        </div>
    );
};

export default CardItem;