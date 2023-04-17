import React, {FC} from 'react';
import {cardAPI} from "../../services/CardService";
import {listSlice} from "../../store/reducers/ListSlice";
import {useAppDispatch} from "../../hooks/redux";
import { Typography } from 'antd';

const { Text } = Typography;

interface IProp {
    name: string;
}

const CardItem: FC<IProp> = ({name}) => {
    const {addNewCard} = listSlice.actions;
    const dispatch = useAppDispatch();

    const {data: card, isLoading, error} = cardAPI.useFetchCardQuery(name);

    if (isLoading && !card) {
        return <Text type="warning">loading...</Text>;
    }
    if (error) {
        return <Text type="danger">Error</Text>;
    }

    dispatch(addNewCard(card));

    return (
        <span>
            <img src={`${card.sprites.front_default}`} height='80px'/>
            {name}
           {card.types.map((el: any) => (
               <span>  /
                   <Text mark>{el.type.name}</Text>
               </span>
           ))}
        </span>
    );
};

export default CardItem;