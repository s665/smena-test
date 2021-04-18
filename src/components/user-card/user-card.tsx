import React from 'react';
import {Avatar, Card} from "antd";
import Meta from "antd/es/card/Meta";
import {UserOutlined} from "@ant-design/icons";

const UserCard: React.FC<any> = ({data}) => {

    const {id, avatar, username, about} = data
    return (
        <div>
            <Card style={{width: '300px'}}
                  key={id}
                  cover={
                      <Avatar shape='square'
                              size={150}
                              style={{margin: '15px auto 0 auto'}}
                              src={avatar}
                              icon={<UserOutlined/>}/>
                  }>
                <Meta title={username}
                      description={about}/>

            </Card>
        </div>
    );


}

export default UserCard;