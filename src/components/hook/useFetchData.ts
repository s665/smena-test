import {useCallback} from "react";
import {useTypedDispatch} from "../../store/hook/useTypedDispatch";
import {clearToken} from "../../store/action-creators/token";


const useFetchData = (token: string | null, method: (token:string) => any) => {

    const dispatch = useTypedDispatch()

    return useCallback(async (token, method) => {
        const res = await method(token)
        if (res.ok){
            return await res.json()
        }
        if (res.status >= 400 && res.status < 500){
            localStorage.removeItem('jwt')
            dispatch(clearToken())
            return await res.json()
        }
        if (res.status >= 500 && res.status < 600){
            return 'Произошла ошибка сервера, повторите попытку позже'
        }
    }, [dispatch])
}

export default useFetchData