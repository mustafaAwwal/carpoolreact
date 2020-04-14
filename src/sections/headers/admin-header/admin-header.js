import styled from "styled-components"
import React from 'react';
import BrandIcon from "../../../widgets/brand-icon/brand-icon";
import carPoolLogo from '../../../assets/icons/carPoolLogo.svg';
import AccountBadge from "../../../widgets/account-badge/account-badge";
export const AdminHeader = ()=>{
    return(
        <AdminHeaderContainer className='fixed-top p-2 d-flex justify-content-between'>
            <BrandIcon image={carPoolLogo} to='/admin/dashboard' />
            <AccountBadge links='false'/>
        </AdminHeaderContainer>
    )
}

export const AdminHeaderContainer = styled.div`
    background-color: #dddddd;
    height:60px;
    z-index:99;
`