import React, {useMemo} from 'react';
import {typeAPI} from "../../services/TypeService";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {listSlice} from "../../store/reducers/ListSlice";
import { Select } from 'antd';

import type { SelectProps } from 'antd';

const SelectBar = () => {
    const dispatch = useAppDispatch();
    const {changeTypesFilter} = listSlice.actions;

    const {data: types, error, isLoading} = typeAPI.useFetchAllTypesQuery({});

    const {typesFilter} = useAppSelector(state => state.listReducer)

    const handleChange = (value: string[]) => {
        dispatch(changeTypesFilter(value as []))
    };

    const options: SelectProps['options'] = useMemo(() => {
        return types?.results?.map(({name}: {name: string}) => ({
            value: name,
            label: name
        }));
    },[types?.results]);

    return (
        <div>
            <Select
                mode="multiple"
                allowClear
                style={{ width: '200px' }}
                placeholder="Select types"
                defaultValue={[]}
                value={typesFilter}
                onChange={handleChange}
                options={options}
            />
        </div>
    );
};

export default SelectBar;


