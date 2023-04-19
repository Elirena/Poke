import React, { FC } from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

interface IProp {
  status: 'loading' | 'empty' | 'error';
}

const StatusNotifications: FC<IProp> = ({ status }) => {
  return (
    <>
      {status === 'loading' && (
        <h1>
          <Text type='warning'>Loading...</Text>
        </h1>
      )}
      {status === 'empty' &&
        <h4>No pokemon found on this page </h4>
      }
      {status === 'error' && (
        <h1>
          <Text type='danger'>Loading page error</Text>
        </h1>
      )}
    </>
  );
};

export default StatusNotifications;
