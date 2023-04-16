import React, {FC} from 'react';
import {ICard} from "../../models/ICard";

interface IProp {
    card: ICard
}
const CardDetails: FC<IProp> = ({card}) => {
    return (
        <div>
            <div>{card.name}</div>
            <div>{card.url}</div>
        </div>
    );
};

export default CardDetails;