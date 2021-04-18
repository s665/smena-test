import React from 'react';
import {Button, Space} from "antd";
import {useHistory} from 'react-router-dom'

const Welcome = () => {

    const history = useHistory()

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Добро пожаловать!</h1>
            <p>Для просмотра информации вам необходимо зарегистрироваться или авторизоваться</p>
            <Space>
                <Button type="primary"
                        onClick={() => history.push('/login/')}>
                    Вход
                </Button>
                <Button onClick={() => history.push('/register/')}>
                    Зарегистрироваться
                </Button>
            </Space>
        </div>
    );
}

export default Welcome;