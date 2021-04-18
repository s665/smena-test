import * as actions from "./token";
import * as types from '../types/token'

describe('action test', () => {
    it('fetch token', () => {
        const expectedAction = {
            type: types.TokenActionType.CLEAR_TOKEN
        }

        expect(actions.clearToken()).toEqual(expectedAction)
    })
    it('set token', () => {
        const token = 'Token string'
        const expectedAction = {
            type: types.TokenActionType.SET_TOKEN,
            payload: token
        }
        expect(actions.setToken(token)).toEqual(expectedAction)
    })
})

export {}