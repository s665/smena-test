import React from 'react';
import FormLogin from "../../form-login";
import useOnLogin from "../../hook/useOnLogin";
import {Spin} from "antd";
import {useTypedSelector} from "../../../store/hook/useTypedSelector";
import {Redirect} from 'react-router-dom'

const LoginPage = () => {

    const onLogin = useOnLogin()
    const {loading, error, token} = useTypedSelector(state => state.token)

    if (loading) {
        return <Spin size='large'/>
    }
    if(token) {
        localStorage.setItem('jwt', token)
        return <Redirect to='/'/>
    }
    return (
        <FormLogin errorMessage={error}
                   onFormSubmit={onLogin}/>
    );
}

export default LoginPage;