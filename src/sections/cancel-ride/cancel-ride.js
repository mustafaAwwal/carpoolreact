import React from 'react';
import MultiColorHeading from '../../widgets/multi-color-heading/multi-color-heading';
import UserInfo from '../user-info/user-info';
import {cancelRideRequest} from '../../services/secure/rides-service'
import { take } from 'rxjs/operators';
const CancelRide = props => {
    let cancelRide = ()=>{
        cancelRideRequest(props).pipe(take(1)).subscribe()
    }
    console.log(props)
    return (
        <>
        <MultiColorHeading black='Cancel' green='Ride'/>
        <UserInfo {...props}/>
        <div className="button-wrapper d-flex justify-content-end align-items-center my-1">
            <button className="btn btn-success rounded-pill" type='button' onClick={()=>cancelRide()}>Cancel Ride</button>
        </div>
        </>
    )
}


export default CancelRide;