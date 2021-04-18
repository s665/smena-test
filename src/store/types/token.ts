export interface ITokenState {
    token: string | null,
    loading: boolean,
    error: string | null
}

export enum TokenActionType {
    FETCH_TOKEN = 'FETCH_TOKEN',
    FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS',
    FETCH_TOKEN_FAILURE = 'FETCH_TOKEN_FAILURE',
    CLEAR_TOKEN = 'CLEAR_TOKEN',
    SET_TOKEN = 'SET_TOKEN'
}

interface FetchToken {
    type: TokenActionType.FETCH_TOKEN
}

interface FetchTokenSuccess {
    type: TokenActionType.FETCH_TOKEN_SUCCESS
    payload: string
}

interface FetchTokenFailure {
    type: TokenActionType.FETCH_TOKEN_FAILURE
    payload: string
}

interface ClearToken {
    type: TokenActionType.CLEAR_TOKEN
}

interface SetToken {
    type: TokenActionType.SET_TOKEN,
    payload: string
}

export type TokenAction = FetchToken | FetchTokenSuccess | FetchTokenFailure | ClearToken | SetToken