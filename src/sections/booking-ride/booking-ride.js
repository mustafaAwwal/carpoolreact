import React from 'react';
import styled from 'styled-components';
import MultiColorHeading from '../../widgets/multi-color-heading/multi-color-heading';
import UserInfo from '../../sections/user-info/user-info';
import {bookRideRequest} from '../../services/secure/rides-service'
import { take } from 'rxjs/operators';
const BookingRide = props=> {
    let bookRide = ()=>{
        console.log(props)
        bookRideRequest({rideId:props._id}).pipe(take(1)).subscribe()
    }
    return (
        <BookingContainer>
            <MultiColorHeading black='Book' green='Ride'/>
            <UserInfo {...props}/>
            <div className="button-wrapper d-flex justify-content-end w-100">
                { props.availableSeats >0 && <button className="btn btn-success rounded-pill mt-1" onClick={()=>bookRide()}>Book Ride</button>}
            </div>
        </BookingContainer>
    )
}
export const BookingContainer = styled.div`

`
export default BookingRide;