import styled from "styled-components"
import React from 'react';
import BrandIcon from '../../../widgets/brand-icon/brand-icon'
import carPoolLogo from '../../../assets/icons/carPoolLogo.svg'
const UserHeader = props => {
    return (
        <UserHeaderContainer className='fixed-top d-flex align-items-center justify-content-between px-2'>
            <BrandIcon image={carPoolLogo}/>
        </UserHeaderContainer>
    )
}

export const UserHeaderContainer = styled.div`
    height: 60px;
    background-color: #dddddd
`
export const links = [
    {
        route: '/user/searchRide',
        linkName: 'Search Ride'
    },
    {
        route: '/user/makeRide',
        linkName: 'Make Ride'
    }
]
export default UserHeader;