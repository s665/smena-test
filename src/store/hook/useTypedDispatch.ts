import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {rootReducer} from "../reducer";

const store = configureStore({
    reducer: rootReducer
})

export type TypedDispatch = typeof store.dispatch
export const useTypedDispatch = () => useDispatch<TypedDispatch>()