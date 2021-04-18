import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './app.css'

import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";
import RegisterPage from "../pages/register-page";
import NotFoundPage from "../pages/not-found-page";
import DefaultLayout from "../layout/default-layout";
import useLocalStorageToken from "../hook/useLocalStorageToken";

const App: React.FC = () => {

    useLocalStorageToken()

    return (
            <DefaultLayout>
                <Switch>
                    <Route path='/'
                           component={HomePage}
                           exact/>
                    <Route path='/login/'
                           component={LoginPage}
                           exact/>
                    <Route path='/register/'
                           component={RegisterPage}
                           exact/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </DefaultLayout>
    );
}

export default App;