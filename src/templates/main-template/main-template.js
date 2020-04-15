import React,{Suspense,lazy} from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import {GuestRoute} from '../../services/authentication'

import { MainHeader } from '../../sections/headers';
const Home = lazy(()=>import('../../pages/main/home/home'));
const Login = lazy(()=>import('../../pages/auth/login/login'));
const Signup =  lazy(()=>import('../../pages/auth/signup/signup'));

export const MainTemplate = props => {
    let match = useRouteMatch();
    console.log(match.url)
    return(
        <div>
            <MainHeader />
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <GuestRoute path={`${match.url}login`}>
                        <Login />
                    </GuestRoute>
                    <GuestRoute path = {`${match.url}signup`} >
                        <Signup />
                    </GuestRoute>
                    <GuestRoute path = {`${match.url}`} >
                        <Home />
                    </GuestRoute>
                </Switch>
            </Suspense>
            
        </div>
    )
}