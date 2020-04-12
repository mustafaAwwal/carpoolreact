import React from 'react';
import { Switch, useRouteMatch, Route } from 'react-router-dom';
import {Login,Signup} from '../../pages/auth'
import Home from '../../pages/main/home/home'
import { MainHeader } from '../../sections/headers';
export const MainTemplate = props => {
    let match = useRouteMatch();
    console.log(match.url)
    return(
        <div>
            <MainHeader />
            <Switch>
                <Route path={`${match.url}login`}>
                    <Login />
                </Route>
                <Route path = {`${match.url}signup`} >
                    <Signup />
                </Route>
                <Route path = {`${match.url}`} >
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}