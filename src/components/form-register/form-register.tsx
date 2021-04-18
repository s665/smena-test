import React from 'react';
import {Alert, Button, Card, Divider, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {IFormAuth} from "../../types";

const FormRegister:React.FC<IFormAuth> = ({errorMessage, onFormSubmit}) => {
    return (
    <Card style={{width: '500px', margin: '0 15px'}}
          className=''>
        <Divider plain><h2>Регистрация</h2></Divider>
        <Form layout='vertical'
              onFinish={onFormSubmit}>
            <Form.Item label='Логин'
                       name='username'
                       rules={[
                           {
                               required: true,
                               message: 'Введите логин!'
                           },
                           {
                               min: 4,
                               message: 'Минимальная длина 4 символа'
                           }
                       ]}>
                <Input prefix={<UserOutlined/>}/>
            </Form.Item>
            <Form.Item label='Пароль'
                       name='password'
                       rules={[
                           {
                               required: true,
                               message: 'Введите пароль'
                           }
                       ]}>
                <Input.Password prefix={<LockOutlined/>}/>
            </Form.Item>
            <Form.Item label='Подтверждение пароля'
                       name='confirmPassword'
                       rules={[
                           {
                               required: true,
                               message: 'Введите пароль'
                           }
                       ]}>
                <Input.Password prefix={<LockOutlined/>}/>
            </Form.Item>
            {
                errorMessage && <Alert message={errorMessage}
                                       type='error'
                                       showIcon
                                       closable
                                       style={{marginBottom: '15px'}}/>
            }
            <Form.Item>
                <Button type='primary'
                        htmlType='submit'>
                    Зарегистрироваться
                </Button>
                <Link to='/login/' style={{marginLeft: '15px'}}>
                    Войти
                </Link>
            </Form.Item>
        </Form>
    </Card>
);
}

export default FormRegister;