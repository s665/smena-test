export type TFields = {
    username: string | null,
    password: string | null,
    confirmPassword?: string | null
}

export interface IFormAuth {
    onFormSubmit: (fields: TFields) => void,
    errorMessage?: string | null
}

export interface IUserCard {
    data: {
        id: number,
        avatar: string,
        username: string,
        about: string
    }
}

export type TLoggedIn = {
    isLoggedIn: boolean
}

export type TRegisterStatus = {
    success: boolean,
    error: string | null,
    loading: boolean
}