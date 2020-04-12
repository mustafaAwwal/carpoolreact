import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
export const ImgWrapper = styled(Link)`
height: 40px;
`
const BrandIcon = props=>{

    return(
        <ImgWrapper to = {props.to}>
            <img src={props.image} alt="" className="h-100"/>
        </ImgWrapper>
    )
}
export default BrandIcon;