import React from 'react';
import MultiColorHeading from '../../../widgets/multi-color-heading/multi-color-heading';
import {driverRideRequest} from '../../../services/secure/rides-service';
import RideCard from '../../../sections/ride-card/ride-card';
import SidePopup from '../../../sections/side-popup/side-popup';
import RideInfo from '../../../sections/ride-info/ride-info'
export class OfferedRides extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            rides: [],
            showRide: false,
            selectedRide: {}
        }
        this.showSelectedRide = this.showSelectedRide.bind(this);
        this.closePopup = this.closePopup.bind(this)
    }
    subscription = []
    componentDidMount() {
        this.subscription.push(driverRideRequest().subscribe(res=>{
            this.setState({rides:res.payload})
        }))
    }
    showSelectedRide(ride) {
        console.log(ride)
        this.setState({showRide:true,selectedRide:ride})
    }
    closePopup() {
        this.setState({showRide:false})
    }
    componentWillUnmount() {
        this.subscription[0].unsubscribe();
    }
    render() {
        let rides = this.state.rides.map((ride)=><RideCard {...ride} key={ride._id} selectRideHandler={this.showSelectedRide}/>)
        let selectedRide = this.state.selectedRide;
        return(
            <div className='container'>
                <MultiColorHeading black='Offered' green='rides'/>
                {rides}
                <SidePopup show={this.state.showRide} closePopup={this.closePopup}>
                    <RideInfo {...selectedRide}/>
                </SidePopup>
            </div>
        )
    }
}