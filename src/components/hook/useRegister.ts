import {useContext, useState} from "react";
import {UserApiContext} from "../../index";
import {TFields, TRegisterStatus} from "../../types";

const useRegister = () => {

    const ctx = useContext(UserApiContext)
    const [registerStatus, setRegisterStatus] = useState<TRegisterStatus>({
        success: false,
        error: null,
        loading: false
    })

    const onRegister = async (fields: TFields): Promise<any> => {
        setRegisterStatus(prevState => {
            return {
                ...prevState,
                loading: true
            }
        })
        const res = await ctx.register(fields)
        const data = await res.json()
        if (res.ok) {
            setRegisterStatus({
                loading: false,
                success: true,
                error: null
            })
        }
        if (res.status >= 400 && res.status < 500) {
            setRegisterStatus({
                loading: false,
                error: data.error,
                success: false
            })
        }
        if (res.status >= 500 && res.status < 600) {
            setRegisterStatus({
                loading: false,
                error: 'Произошла ошибка на сервере, попробуйте позже...',
                success: false
            })
        }
    }

    let result: [TRegisterStatus, (field: TFields) => Promise<void>]
    result = [registerStatus, onRegister]
    return result
}

export default useRegister