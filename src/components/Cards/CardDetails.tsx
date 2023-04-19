import React, {FC} from 'react';
import { Col, Typography , Row } from 'antd';
import { useAppSelector } from '../../hooks/redux';

const { Text } = Typography;

interface IProp {
    name: string
}
const CardDetails: FC<IProp> = ({name}) => {
    const  {
        cards
    } = useAppSelector(state => state.listReducer)

    const card = cards.find(el => el.name === name)

    return (
        <div>
            {card &&
                <Row>
                    <Col flex={2}>
                        <div>
                            <span>height: </span>
                            <Text type="warning">{card.height}</Text>
                        </div>
                        <div>
                            <span>base experience: </span>
                            <Text type="warning">{card.baseExperience}</Text>
                        </div>
                        <div>
                            <span>weight: </span>
                            <Text type="warning">{card.weight}</Text>
                        </div>
                    </Col>
                    <Col flex={3}>
                        <div>abilities: </div>
                        <Text type="success">
                            {card.abilities?.map(el =>
                              <div>{el.ability.name}</div>)
                            }
                        </Text>
                    </Col>
                </Row>
            }
        </div>
    );
};

export default CardDetails;