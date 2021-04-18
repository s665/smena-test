import {useEffect} from "react";
import {setToken} from "../../store/action-creators/token";
import {useTypedDispatch} from "../../store/hook/useTypedDispatch";


const useLocalStorageToken = () => {
    
    const dispatch = useTypedDispatch()
    
    useEffect(() => {
        const jwt: string | null  = localStorage.getItem('jwt')
        if (jwt) {
            dispatch(setToken(jwt))
        }
    }, [dispatch])
}

export default useLocalStorageToken;