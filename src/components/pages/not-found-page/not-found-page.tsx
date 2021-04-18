import React from 'react';
import {Result} from "antd";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <Result status='404'
                title='404'
                subTitle='Страница не найдена...'
                extra={<Link to='/'>На главную</Link>}/>
    );
}

export default NotFoundPage;