import React from 'react';
import { Input, Space } from 'antd';

const { Search } = Input;

const SearchBar = () => {
    const onSearch = (value: string) => console.log(value);

    return (
        <span>

            <Space direction="vertical">
                <Search placeholder="input search text"
                        onSearch={onSearch}
                        style={{ width: 200 }}
                />
            </Space>
        </span>
    );
};

export default SearchBar;