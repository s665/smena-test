import {TokenAction, TokenActionType} from "../types/token";
import {Dispatch} from 'react'
import {TFields} from "../../types";

export const clearToken = () => {
    return {type: TokenActionType.CLEAR_TOKEN}
}

export const setToken = (payload: string) => {
    return {
        type: TokenActionType.SET_TOKEN,
        payload
    }
}

export const fetchToken = (data: TFields, method: (fields: TFields) => Promise<any>) => {
    return async (dispatch: Dispatch<TokenAction>) => {
        dispatch({type: TokenActionType.FETCH_TOKEN})
        const res = await method(data)
        if (res.ok) {
            const data = await res.json()
            localStorage.setItem('jwt', data.token)
            dispatch({
                type: TokenActionType.FETCH_TOKEN_SUCCESS,
                payload: data.token
            })
        }
        if (res.status >= 400 && res.status < 500) {
            const data = await res.json()
            dispatch({
                type: TokenActionType.FETCH_TOKEN_FAILURE,
                payload: data.error
            })
        }
        if (res.status >= 500 && res.status < 600) {
            dispatch({
                type: TokenActionType.FETCH_TOKEN_FAILURE,
                payload: 'Произошла ошибка на сервере, повторите попытку позже'
            })
        }
    }
}