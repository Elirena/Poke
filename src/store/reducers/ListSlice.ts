import { ICard } from '../../models/ICard';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListState {
  cards: ICard[];
  isLoading: boolean;
  error: string;
  itemsPerPage: number;
  offset: number;
  totalCardsCount: number;
  typesFilter: string[];
  searchFilter: string;
}

const initialState: ListState = {
  cards: [],
  isLoading: false,
  error: '',
  itemsPerPage: 10,
  offset: 0,
  totalCardsCount: 0,
  typesFilter: [],
  searchFilter: '',
};

export const listSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    /*** All backend cards count */
    setTotalCardsCount(state, action: PayloadAction<number>) {
      state.totalCardsCount = action.payload;
    },
    addNewCard(state, action: PayloadAction<Record<string, any>>) {
      if (!state.cards.find(el => el.name === action.payload.name)) {
        state.cards = [
          ...state.cards,
          {
            name: action.payload.name,
            avatar: action.payload.sprites.front_default,
            types: action.payload.types.map((el: any) => el.type.name),
            height: action.payload.height,
            weight: action.payload.weight,
            baseExperience: action.payload.base_experience,
            abilities: action.payload.abilities,
          },
        ];
      }
    },
    /*** Page settings */
    changeItemsPerPage(state, action: PayloadAction<number>) {
      state.itemsPerPage = action.payload;
    },
    changeOffset(state, action: PayloadAction<number>) {
      state.offset = (action.payload - 1) * state.itemsPerPage;
      state.typesFilter = [];
    },
    /*** Filters on page */
    changeTypesFilter(state, action: PayloadAction<string[]>) {
      state.typesFilter = action.payload;
    },
    changeSearchFilter(state, action: PayloadAction<string>) {
      state.searchFilter = action.payload;
    },
  },
});

export default listSlice.reducer;
