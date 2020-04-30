import React from 'react';
import styled from 'styled-components';
import RideCard from '../../../sections/ride-card/ride-card';
import MultiColorHeading from '../../../widgets/multi-color-heading/multi-color-heading'
import {bookedRideRequest} from '../../../services/secure/rides-service';
import SidePopup from '../../../sections/side-popup/side-popup';
import CancelRide from '../../../sections/cancel-ride/cancel-ride';
class BookedRides extends React.Component {
    state = {
        rides: [],
        showCancelRide: false,
        selectedRide: {}
    };
    subscription = []
    componentDidMount = ()=> {
        this.subscription.push( bookedRideRequest().subscribe(res=>this.setState({rides:res.payload})))
    }
    componentWillUnmount = ()=>{
        this.subscription[0].unsubscribe();
    }
    showSelectedRide = (ride) => {
        this.setState({selectedRide:ride, showCancelRide: true})
    }
    closePopup = ()=> {
        this.setState({showCancelRide:false})
    }
    render = ()=> {
        let rides = this.state.rides.map(ride=><RideCard key={ride._id} {...ride.rideId} selectRideHandler={this.showSelectedRide}/>)
        return(
            <BookesRideContainer className='container'>
                <MultiColorHeading black='Booked' green='Rides' />
                {rides}
                <SidePopup show={this.state.showCancelRide} closePopup={this.closePopup}>
                    <CancelRide {...this.state.selectedRide}/>
                </SidePopup>
            </BookesRideContainer>
        )
    }
}

export const BookesRideContainer = styled.div`
`
export default BookedRides;