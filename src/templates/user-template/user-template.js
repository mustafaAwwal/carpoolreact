import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import UserHeader from '../../sections/headers/user-header/user-header';
import {SearchRide,MakeRide,BookedRides,OfferedRides} from '../../pages/user'
import {UserRoute} from '../../services/authentication';
import styled from 'styled-components';
export const UserTemplate = props => {
    const match = useRouteMatch();
    return(
        <UserWrapper>
            <UserHeader />
            <Switch>
                <UserRoute path={`${match.url}/offeredRides`}>
                    <OfferedRides />
                </UserRoute>
                <UserRoute path={`${match.url}/bookedRides`}>
                    <BookedRides />
                </UserRoute>
                <UserRoute path={`${match.url}/searchRide`}>
                    <SearchRide />
                </UserRoute>
                <UserRoute path={`${match.url}/makeRide`}>
                    <MakeRide />
                </UserRoute>
            </Switch>
        </UserWrapper>

    )
}
export const UserWrapper = styled.div`
    padding-top: 90px
`