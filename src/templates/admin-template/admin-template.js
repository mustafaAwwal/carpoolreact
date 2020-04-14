import React from 'react';
import styled from 'styled-components';
import { Switch,useRouteMatch } from 'react-router-dom';
import { AdminRoute } from '../../services/authentication';
import { AdminDashboard } from '../../pages/admin';
import { AdminHeader } from '../../sections/headers';

export const AdminTemplate = ()=>{
    let match = useRouteMatch()
    return(
        <AdminWrapper>
            <AdminHeader />
            <Switch>
                <AdminRoute path={`${match.url}/dashboard`}>
                    <AdminDashboard />
                </AdminRoute>
            </Switch>
        </AdminWrapper>
    )
}

export const AdminWrapper = styled.div`
padding-top:80px;
`