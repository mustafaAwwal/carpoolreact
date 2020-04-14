import React from 'react';
import HeadingInfo from '../../widgets/heading-info/heading-info';
import styled from 'styled-components';
const UserInfo = props=>{
    return (
        <>
            <div className="container-fluid border-bottom">
                <div className="row">
                    <div className="col-8">
                        <HeadingInfo heading='Driver' info={props.driverId.fullName}/>
                        <HeadingInfo heading='Phone Number' info={props.driverId.phoneNumber}/>
                        <HeadingInfo heading='Email Address' info={props.driverId.emailAddress}/>
                        <HeadingInfo heading='Departure' info={props.departure}/>
                        <HeadingInfo heading='Destination' info={props.destination}/>
                        <HeadingInfo heading='Departure Date' info={props.departureDate}/>
                        <HeadingInfo heading='Est. Reaching Time(hrs)' info={props.estReachingTime}/>
                        <HeadingInfo heading='Car Registration' info={props.carRegistration}/>
                        <HeadingInfo heading='Car Description' info={props.carDescription}/>
                        <HeadingInfo heading='Available Seats' info={props.availableSeats}/>
                    </div>
                    <div className="col-4">
                        <ImageWrapper>
                            <img src={props.driverId.picture} className='shadow' alt=""/>
                        </ImageWrapper>
                    </div>
                </div>

            </div>
        </>
    )
}
export const ImageWrapper = styled.div`
width:100%;
border-radius: 20px;
overflow:hidden;
img{
    width:100%;
}
`

export default UserInfo