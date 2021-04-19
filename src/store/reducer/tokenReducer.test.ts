import {tokenReducer} from "./tokenReducer";
import * as types from '../types/token'

const initialState = {
    loading: false,
    token: null,
    error: null
}

describe('token reducer', () => {

    it('should handle FETCH_TOKEN_SUCCESS', () => {
        expect(
            tokenReducer(initialState, {
                type: types.TokenActionType.FETCH_TOKEN_SUCCESS,
                payload: 'token'
            })
        ).toEqual({
            loading: false,
            token: 'token',
            error: null
        })
    })

    it('should handle FETCH_TOKEN_FAILURE', () => {
        expect(
            tokenReducer(initialState, {
                type: types.TokenActionType.FETCH_TOKEN_FAILURE,
                payload: 'error'
            })
        ).toEqual({
            loading: false,
            token: null,
            error: 'error'
        })
    })

    it('should handle CLEAR_TOKEN', () => {
        expect(
            tokenReducer({
               loading: false,
               token: 'token',
               error: null
            }, {
                type: types.TokenActionType.CLEAR_TOKEN
            })
        ).toEqual({
            loading: false,
            error: null,
            token: null
        })
    })
})