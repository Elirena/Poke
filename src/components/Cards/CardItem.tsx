import React, { FC, useEffect } from 'react';
import { cardAPI } from '../../services/CardService';
import { listSlice } from '../../store/reducers/ListSlice';
import { useAppDispatch } from '../../hooks/redux';
import { StatusNotifications } from '../UIKit/StatusNotifications';
import { Typography } from 'antd';

const { Text } = Typography;

interface IProp {
  name: string;
}

export const CardItem: FC<IProp> = ({ name }) => {
  const { addNewCard } = listSlice.actions;
  const dispatch = useAppDispatch();

  const {
    data: card,
    isLoading,
    error
  } = cardAPI.useFetchCardQuery(name);

  useEffect(() => {
    if (card && !isLoading && !error) {
      dispatch(addNewCard(card))
    }
  }, [addNewCard, card, dispatch, error, isLoading]);

  if (isLoading && !card) {
    return (
      <div className="card">
        <StatusNotifications status={'loading'} />
      </div>
    );
  }
  if (error) {
    return <StatusNotifications status={'error'} />;
  }

  return (
    <div className="card">
      <span>
        <img src={`${card.sprites.front_default}`}
             height="80px"
             alt="poke-pic"
        />
      </span>
      <span>{name}</span>
      {
        card.types.map((el: Record<string, any>) => (
        <span key={`${el.type.name}`}>
          /<Text mark>{el.type.name}</Text>
        </span>
      ))
      }
    </div>
  );
};
