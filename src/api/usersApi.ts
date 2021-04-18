import {TFields} from "../types";


enum endpoint {
    login = '/login/',
    register = '/register/',
    about = '/about/'
}

export default class UsersApi {
    readonly _baseUrl: string = 'http://localhost:8080'

    authorization = async (userData: TFields): Promise<any> => {
        const setting = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }
        return await fetch(`${this._baseUrl}${endpoint.login}`, setting)
    }

    register = async (userData: TFields): Promise<any> => {
        const setting = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }
        return await fetch(`${this._baseUrl}${endpoint.register}`, setting)
    }

    fetchUserInfo = async (token: string) => {
        const setting = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }}
        return await fetch(`${this._baseUrl}${endpoint.about}`, setting)
    }


}