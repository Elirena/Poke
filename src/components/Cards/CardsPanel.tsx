import React, { FC } from 'react';
import { ICard } from '../../models/ICard';
import { CardDetails } from './CardDetails';
import { CardItem } from './CardItem';
import { Collapse } from 'antd';

const { Panel } = Collapse;

interface IProp {
  cards: ICard[];
}

export const CardsPanel: FC<IProp> = ({ cards }) => {
  return (
    <Collapse collapsible="header" className="collapseBar">
      {cards.map((card: ICard) => (
        <Panel
          className="collapsePanel"
          showArrow={false}
          header={<CardItem name={card.name} />}
          key={card.name}
        >
          <CardDetails name={card.name} />
        </Panel>
      ))}
    </Collapse>
  );
};
