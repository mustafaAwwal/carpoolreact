import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import UserHeader from '../../sections/headers/user-header/user-header';
import {SearchRide,MakeRide} from '../../pages/user'
import {UserRoute} from '../../services/authentication';
export const UserTemplate = props => {
    const match = useRouteMatch();
    return(
        <div>
            <UserHeader />
            <Switch>
                <UserRoute path={`${match.url}/searchRide`}>
                    <SearchRide />
                </UserRoute>
                <UserRoute path={`${match.url}/makeRide`}>
                    <MakeRide />
                </UserRoute>
            </Switch>
        </div>

    )
}
