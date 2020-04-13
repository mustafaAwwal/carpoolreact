import React from 'react';
import SidePopup from '../../../sections/side-popup/side-popup'
import SearchBar from '../../../sections/search-bar/search-bar';
import {searchRides} from '../../../services/secure/rides-service';
import RideCard from '../../../sections/ride-card/ride-card'
import BookingRide from '../../../sections/booking-ride/booking-ride';
export class SearchRide extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pickCoOrdinates: false,
            showRide: true,
            searchedRides: [],
            selectedRide: {},
            showPopup: false
        }
        this.searchRideHandler = this.searchRideHandler.bind(this);
        this.showSelectedRide = this.showSelectedRide.bind(this);
    }
    state ={
        
    }
    showPopup() {
        this.setState({showPopup: true})
    }
    searchRideHandler(values) {
        searchRides(values).subscribe(
            res=> {
                this.setState({searchedRides: res.payload})
            }
            
        )
    }
    showSelectedRide(ride) {
        console.log(ride)
        this.setState({selectedRide: ride})
        this.showPopup();
    }
    render() {
        let rides = this.state.searchedRides.map((ride,i)=><RideCard key={i} {...ride} selectRideHandler={this.showSelectedRide}/>)
        let popupComponent = this.state.pickCoOrdinates ? <div>hello</div> : <BookingRide {...this.state.selectedRide}/>
        return(
            <div className='container'>
                <SearchBar searchRideHandler={this.searchRideHandler}/>
                <SidePopup show={this.state.showPopup}>
                    {popupComponent}
                </SidePopup>
                {rides}
            </div>
        )
    }
}