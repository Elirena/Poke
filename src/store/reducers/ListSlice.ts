import {ICard} from "../../models/ICard";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
interface ListState {
    cards: ICard[];
    isLoading: boolean;
    error: string;
    itemsPerPage: number;
    offset: number;
    totalCardsCount: number;
}

const initialState: ListState = {
    cards: [],
    isLoading: false,
    error: '',
    itemsPerPage: 10,
    offset: 0,
    totalCardsCount: 0
}

export const listSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        /*** change items count per page */
        changeItemsPerPage(state, action: PayloadAction<number>) {
            state.itemsPerPage = action.payload
        },
        changeOffset(state, action: PayloadAction<number>) {
            state.offset = (action.payload - 1) * state.itemsPerPage
        },
        setTotalCardsCount(state, action: PayloadAction<number>) {
            state.totalCardsCount =  action.payload
        },
        addNewCard(state, action: PayloadAction<ICard>){
            if(!state.cards.find(el => el.name ===  action.payload.name)){
                state.cards = [...state.cards, action.payload]
            }
        }
    }
})

export default listSlice.reducer