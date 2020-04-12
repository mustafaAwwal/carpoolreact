import React from 'react';
import styled from 'styled-components'
import BrandIcon from '../../../widgets/brand-icon/brand-icon';
import homeLogo from '../../../assets/icons/homeLogo.svg'
import {Link} from 'react-router-dom'
export const BlackHeader = styled.div`
    height: 60px;
    background-color: black;
`
export const MainHeader = props => {
    let HeaderLinks = links.map(link=>(
        <li key={link.linkName}>
            <Link className='nav-item text-light ml-3' to={link.route}>{link.linkName}</Link>
        </li>
    ))
    return(
        <BlackHeader className='fixed-top d-flex align-items-center px-2 justify-content-between'>
            <BrandIcon image = {homeLogo} to='/'/>
            <ul className='nav'>
                {HeaderLinks}
            </ul>
        </BlackHeader>
    )
}

export const links = [
    {
        linkName: 'Login',
        route: '/login'
    },
    {
        linkName: 'Signup',
        route: '/signup'
    }
]