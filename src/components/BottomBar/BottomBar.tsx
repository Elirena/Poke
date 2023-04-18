import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {listSlice} from "../../store/reducers/ListSlice";
import {Pagination} from 'antd';

const itemsPerPageOptions = [10, 20, 50]

const BottomBar = () => {
    const dispatch = useAppDispatch();
    const {changeItemsPerPage, changeOffset} = listSlice.actions;
    const {itemsPerPage, totalCardsCount} = useAppSelector(state => state.listReducer)

    const onChange = (value: number, size: number) => {
        value && dispatch(changeOffset(value))

        if (itemsPerPage !== size) {
            dispatch(changeItemsPerPage(size));
        }
    };

    return (
        <Pagination
            total={totalCardsCount}
            defaultPageSize={itemsPerPage}
            pageSizeOptions={itemsPerPageOptions}
            onChange={onChange}
        />
    );
};

export default BottomBar;