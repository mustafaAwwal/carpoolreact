import React from 'react';
import HeadingInfo from '../../widgets/heading-info/heading-info'
const UserInfo = props=>{
    return (
        <>
            <div className="container-fluid border-bottom">
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
                    <HeadingInfo heading='Departure Description' info={props.departureDescription}/>
                    <HeadingInfo heading='Available Seats' info={props.availableSeats}/>
                </div>
                <div className="col-4">
                    
                </div>
            </div>
        </>
    )
}

export default UserInfo