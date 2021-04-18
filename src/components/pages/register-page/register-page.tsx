import React from 'react';
import FormRegister from "../../form-register";
import {Button, Result} from "antd";
import {useHistory} from 'react-router-dom';
import useRegister from "../../hook/useRegister";

const RegisterPage = () => {

    const history = useHistory()
    const [registerStatus, onRegister] = useRegister()

    if (registerStatus.success) {
        return (
            <Result status='success'
                    title='Вы успешно зарегистрировальсь!'
                    extra={[
                        <Button type='primary'
                                key='login'
                                onClick={() => history.push('/login')}>
                            Вход
                        </Button>]}/>
        )
    }

    return (
        <FormRegister errorMessage={registerStatus.error}
                      onFormSubmit={onRegister}
        />
    );
}

export default RegisterPage;