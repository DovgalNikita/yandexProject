import { configureStore, combineReducers } from "@reduxjs/toolkit";
import visibleSlice from "./visibleSlice/visibleSlice";
import transformSlice from "./transformSlice/transformSlice";

const rootReducer = combineReducers({
    visibleSlice,
    transformSlice
});

export const store = configureStore({
    reducer:rootReducer,
});

export type RootState = ReturnType <typeof store.getState>;
export type AppDispatch = typeof store.dispatch;