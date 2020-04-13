import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import {Login,Signup} from '../../pages/auth'
import {GuestRoute} from '../../services/authentication'
import Home from '../../pages/main/home/home'
import { MainHeader } from '../../sections/headers';
export const MainTemplate = props => {
    let match = useRouteMatch();
    console.log(match.url)
    return(
        <div>
            <MainHeader />
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
        </div>
    )
}