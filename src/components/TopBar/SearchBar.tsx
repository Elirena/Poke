import React from 'react';
import { Input, Space } from 'antd';
import { useAppDispatch } from '../../hooks/redux';
import { listSlice } from '../../store/reducers/ListSlice';

const { Search } = Input;

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { changeSearchFilter } = listSlice.actions;

  const onSearch = (value: string) => {
    if (value) {
      dispatch(changeSearchFilter(value.toLowerCase()));
    }
  };

  const onChange = (value: string) => {
    if (!value) {
      dispatch(changeSearchFilter(''));
    }
  };

  return (
    <span className="ant-select-bar">
      <Space direction='vertical'>
        <Search
          placeholder='POKEMON NAME'
          onSearch={onSearch}
          onChange={e => onChange(e.target.value)}
        />
      </Space>
    </span>
  );
};
