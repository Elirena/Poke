import React, { useMemo } from 'react';
import { typeAPI } from '../../services/TypeService';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { listSlice } from '../../store/reducers/ListSlice';
import { Select } from 'antd';

import type { SelectProps } from 'antd';
import StatusNotifications from '../UIKit/StatusNotifications';

const SelectBar = () => {
  const dispatch = useAppDispatch();
  const { changeTypesFilter } = listSlice.actions;
  const {
    typesFilter
  } = useAppSelector(state => state.listReducer);

  const {
    data: types,
    error,
    isLoading
  } = typeAPI.useFetchAllTypesQuery({});

  const handleChange = (value: string[]) => {
    dispatch(changeTypesFilter(value as []));
  };

  const options: SelectProps['options'] = useMemo(() => {
    return types?.results?.map(({ name }: { name: string }) => ({
      value: name,
      label: name,
    }));
  }, [types?.results]);

  if (error) {
    return <StatusNotifications status={'error'} />;
  }
  if (isLoading) {
    return <StatusNotifications status={'loading'} />;
  }

  return (
    <div>
      {types && (
        <Select
          mode='multiple'
          className="ant-select-bar"
          allowClear
          placeholder='Select types'
          defaultValue={[]}
          value={typesFilter}
          onChange={handleChange}
          options={options}
        />
      )}
    </div>
  );
};

export default SelectBar;