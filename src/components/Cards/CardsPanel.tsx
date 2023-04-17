import React, {FC} from 'react';
import {ICard} from "../../models/ICard";
import CardDetails from "./CardDetails";
import { Collapse } from 'antd';
import CardItem from "./CardItem";

const { Panel } = Collapse;

interface IProp {
    cards: ICard[]
}
const CardsPanel: FC<IProp> = ({cards}) => {
    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    return (
        <Collapse onChange={onChange} collapsible="header">
            {cards.map((card: ICard) => (
                <Panel
                    header={<CardItem name={card.name}/>}
                    key={card.name}
                >
                    <CardDetails name={card.name}/>
                </Panel>
            ))}
        </Collapse>
    );
};



export default CardsPanel;