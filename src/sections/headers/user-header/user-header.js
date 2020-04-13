import styled from "styled-components"
import React from 'react';
import BrandIcon from '../../../widgets/brand-icon/brand-icon'
import carPoolLogo from '../../../assets/icons/carPoolLogo.svg'
import {NavLink} from 'react-router-dom';
import AccountBadge from "../../../widgets/account-badge/account-badge";
const UserHeader = props => {
    return (
        <UserHeaderContainer className='fixed-top d-flex align-items-center justify-content-between px-2'>
            <BrandIcon image={carPoolLogo} to='/user/searchRide'/>
            <div className="links">
                {links.map(
                    (route,i)=><NavLink key={i} to={route.route} activeClassName='btn-dark' className='btn btn-success rounded-pill mx-1'>{route.linkName}</NavLink>
                )}
            </div>
            <AccountBadge />
        </UserHeaderContainer>
    )
}

export const UserHeaderContainer = styled.div`
    height: 60px;
    background-color: #dddddd;
    z-index: 99;
`

export const links = [
    {
        linkName: 'Ride',
        route: '/user/searchRide'
    },
    {
        linkName: 'Drive',
        route: '/user/makeRide'
    }
]



export default UserHeader;