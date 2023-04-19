import { combineReducers, configureStore } from '@reduxjs/toolkit';
import listReducer from './reducers/ListSlice';
import { cardAPI } from '../services/CardService';
import { typeAPI } from '../services/TypeService';

const rootReducer = combineReducers({
  listReducer,
  [cardAPI.reducerPath]: cardAPI.reducer,
  [typeAPI.reducerPath]: typeAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
      .concat(cardAPI.middleware)
      .concat(typeAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
