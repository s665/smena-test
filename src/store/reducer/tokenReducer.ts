import {ITokenState, TokenAction, TokenActionType} from "../types/token";

const initialState: ITokenState = {
    token: null,
    loading: false,
    error: null
}

export const tokenReducer = (state = initialState, action: TokenAction): ITokenState => {
    switch (action.type) {
        case TokenActionType.FETCH_TOKEN:
            return { loading:true, error: null, token: null }
        case TokenActionType.FETCH_TOKEN_SUCCESS:
            return { loading: false, error: null, token: action.payload}
        case TokenActionType.FETCH_TOKEN_FAILURE:
            return { loading: false, error: action.payload, token: null}
        case TokenActionType.CLEAR_TOKEN:
            return { loading: false, error: null, token: null}
        case TokenActionType.SET_TOKEN: {
            return {loading: false, error: null, token: action.payload}
        }
        default:
            return state
    }
}