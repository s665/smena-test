import {useContext} from "react";
import {UserApiContext} from "../../index";
import {useDispatch} from "react-redux";
import {fetchToken} from "../../store/action-creators/token";
import {TFields} from "../../types";

const useOnLogin = () => {

    const ctx = useContext(UserApiContext)
    const dispatch = useDispatch()

    return (fields: TFields) => {
        dispatch(fetchToken(fields, ctx.authorization))
    }
}

export default useOnLogin;