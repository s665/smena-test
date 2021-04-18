import React, {useContext, useEffect, useState} from 'react';
import Welcome from "../../welcome";
import {useTypedSelector} from "../../../store/hook/useTypedSelector";
import UserCard from '../../user-card';
import {UserApiContext} from "../../../index";
import useFetchData from "../../hook/useFetchData";
import {Spin} from "antd";

const HomePage = () => {

    const ctx = useContext(UserApiContext)
    const {token} = useTypedSelector(state => state.token)
    const [userData, setUserData] = useState<any>({
        data: null,
        loading: true
    })
    const fetchData = useFetchData(token, ctx.fetchUserInfo)

    useEffect(() => {
        if (token){
            fetchData(token, ctx.fetchUserInfo)
                .then(data => {
                    if ('data' in data) {
                        setUserData({
                            data: data.data,
                            loading:false
                        })
                    }
                })
        }
    }, [ctx, fetchData, token])

    if(token && userData.loading) {
        return <Spin size="large"/>
    }
    if (token && userData) {
        return <UserCard data={userData.data}/>
    }
    return (
        <Welcome/>
    );
}

export default HomePage;