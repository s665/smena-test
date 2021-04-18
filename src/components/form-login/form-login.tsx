import React from 'react';
import {Alert, Button, Card, Divider, Form, Input} from "antd";
import {UserOutlined, LockOutlined} from "@ant-design/icons";
import {Link} from 'react-router-dom'
import {IFormAuth} from "../../types";


const FormLogin:React.FC<IFormAuth> = ({onFormSubmit, errorMessage}) => {
    return (
        <Card style={{width: '500px', margin: '0 15px'}}
              className=''>
            <Divider plain><h2>Вход</h2></Divider>
            <Form layout='vertical'
                  onFinish={onFormSubmit}>
                <Form.Item label='Логин'
                           name='username'
                           rules={[
                               {
                                   required: true,
                                   message: 'Введите логин!'
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
                        Войти
                    </Button>
                    <Link to='/register/' style={{marginLeft: '15px'}}>
                        Регистрация
                    </Link>
                </Form.Item>
            </Form>
        </Card>
    );
}

export default FormLogin;