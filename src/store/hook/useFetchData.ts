import {useEffect, useState} from "react";
import {useTypedSelector} from "./useTypedSelector";


const useFetchData = (started: boolean, method: (token: string) => Promise<any>) => {

    const [data, setData] = useState()
    const {token} = useTypedSelector(state => state.token)
    
    useEffect(() => {
        if (started && token) {
            method(token)
                .then(data => setData(data))
                .catch(error => console.log(error))
        }
    }, [method, started, token])
    
    return data
}

export default useFetchData