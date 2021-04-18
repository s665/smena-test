import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";


import App from "./components/app/app";
import UserApi from './api/usersApi'
import {store} from "./store";


const api = new UserApi()
export const UserApiContext = React.createContext(api)

ReactDOM.render(
    <UserApiContext.Provider value={api}>
        <Router>
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>
    </UserApiContext.Provider>
    ,
    document.getElementById('root')
);