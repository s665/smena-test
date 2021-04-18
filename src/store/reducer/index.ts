import {combineReducers} from 'redux'
import {tokenReducer} from "./tokenReducer";
import { store } from "../index";

export const rootReducer = combineReducers({
    token: tokenReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type TypedDispatch = typeof store.dispatch