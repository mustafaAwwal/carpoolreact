import React from 'react';
import { Switch, useRouteMatch, Route } from 'react-router-dom';
import UserHeader from '../../sections/headers/user-header/user-header';
import {SearchRide,MakeRide} from '../../pages/user'
export const UserTemplate = props => {
    const match = useRouteMatch();
    return(
        <div>
            <UserHeader />
            <Switch>
                <Route path={`${match.url}/searchRide`}>
                    <SearchRide />
                </Route>
                <Route>
                    <MakeRide />
                </Route>
            </Switch>
        </div>

    )
}
