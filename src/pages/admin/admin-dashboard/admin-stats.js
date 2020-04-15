import React from 'react';
import styled from 'styled-components';
import MultiColorHeading from '../../../widgets/multi-color-heading/multi-color-heading';
import HeadingInfo from '../../../widgets/heading-info/heading-info';
export const AdminStats = props=>{
    return(
        <StatsContainer className='shadow-lg'>
            <div className="content">
                <MultiColorHeading black='Admin' green='Stats'/>
                <HeadingInfo heading='No.Of Rides' info={props.length}/>
            </div>
            
        </StatsContainer>
    )
}

export const StatsContainer = styled.div`
    position:fixed;
    top:0px;
    right:0px;
    width:300px;
    height:100vh;
    padding:100px 20px;
    transition:400ms;
    @media (max-width:1200px){
        width:20px;
        padding:0px;
        transition:400ms;
        background-color: #3bc04a !important;
        .content{
            display:none;
        }
        &:hover {
            width:300px;
            transition:400ms;
            padding:100px 20px;
            background-color:white !important;
            .content {
                display:initial;
            }
        }

    }
`