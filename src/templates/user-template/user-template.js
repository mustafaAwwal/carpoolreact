import React,{Suspense,lazy} from 'react';
import { Switch, useRouteMatch,Redirect } from 'react-router-dom';
import UserHeader from '../../sections/headers/user-header/user-header';
import {UserRoute} from '../../services/authentication';
import styled from 'styled-components';
const SearchRide = lazy(()=>import('../../pages/user/search-ride/search-ride'));
const MakeRide   = lazy(()=>import('../../pages/user/make-ride/make-ride'));
const OfferedRides = lazy(()=>import('../../pages/user/offered-rides/offered-rides'));
const BookedRides = lazy(()=>import('../../pages/user/booked-rides/booked-rides'));
export const UserTemplate = props => {
    const match = useRouteMatch();
    return(
        <UserWrapper>
            <UserHeader />
            <Suspense fallback={ <div>...loading</div> }>
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
                    <Redirect to='/user/searchRide'/>
                </Switch>
            </Suspense>
            
        </UserWrapper>

    )
}
export const UserWrapper = styled.div`
    padding-top: 90px
`