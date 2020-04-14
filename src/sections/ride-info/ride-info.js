import React from 'react';
import MultiColorHeading from '../../widgets/multi-color-heading/multi-color-heading'
import UserInfo from '../user-info/user-info';
const RideInfo = props=>{
    return(
        <>
            <MultiColorHeading black='Ride' green='Info'/>
            <UserInfo {...props}/>
        </>
    )
}

export default RideInfo;