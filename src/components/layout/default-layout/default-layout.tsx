import React, {ReactNode} from 'react';
import {Layout, Menu} from 'antd'
import {Content, Footer, Header} from "antd/es/layout/layout";
import {LoginOutlined, LogoutOutlined} from "@ant-design/icons";
import {Link} from 'react-router-dom'
import {useTypedDispatch} from "../../../store/hook/useTypedDispatch";
import {clearToken} from "../../../store/action-creators/token";
import {useTypedSelector} from "../../../store/hook/useTypedSelector";

import style from './style.module.css'

interface IDefaultLayout {
    children?: ReactNode
}

const DefaultLayout: React.FC<IDefaultLayout> = ({children}) => {

    const dispatch = useTypedDispatch()
    const {token} = useTypedSelector(state => state.token)

    const menu =
        !token ?
            (
                <>
                    <Menu.Item icon={<LoginOutlined/>}>
                        <Link to='/login/'>Вход</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to='/register/'>Регистрация</Link>
                    </Menu.Item>
                </>
            )
            :
            (
                <Menu.Item icon={<LogoutOutlined/>}
                           onClick={() => dispatch(clearToken())}>
                    Выход
                </Menu.Item>
            )


    return (
        <Layout className={style.layout}>
            <Header className={style.navBar}>
                <div className={style.logo}>
                    <Link to='/'>SMENA</Link>
                </div>
                <Menu theme='dark'
                      mode='horizontal'
                      selectable={false}>

                    {menu}

                </Menu>

            </Header>

            <Content className={style.content}>
                {children}
            </Content>

            <Footer className={style.footer}>
                React+Typescript+Redux+Jest+AntDesign
            </Footer>
        </Layout>
    );
}

export default DefaultLayout;