import {combineReducers, configureStore} from "@reduxjs/toolkit";
import listReducer from './reducers/ListSlice';
import {cardAPI} from "../services/CardService";

const rootReducer = combineReducers({
    listReducer,
    [cardAPI.reducerPath]: cardAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(cardAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']