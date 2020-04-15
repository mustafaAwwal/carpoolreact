import React from 'react';
import SidePopup from '../../../sections/side-popup/side-popup'
import SearchBar from '../../../sections/search-bar/search-bar';
import {searchRides} from '../../../services/secure/rides-service';
import RideCard from '../../../sections/ride-card/ride-card'
import BookingRide from '../../../sections/booking-ride/booking-ride';
class SearchRide extends React.Component {
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
        this.closePopup = this.closePopup.bind(this)
    }
    subscription = []
    showPopup() {
        this.setState({showPopup: true})
    }
    searchRideHandler(values) {
        this.subscription.push(searchRides(values).subscribe(
            res=> {
                this.setState({searchedRides: res.payload})
            }
            
        ))
    }
    componentWillUnmount(){
        this.subscription.map(sub=>sub.unsubscribe())
    }
    showSelectedRide(ride) {
        console.log(ride)
        this.setState({selectedRide: ride})
        this.showPopup();
    }
    closePopup(){
        this.setState({showPopup:false})
    }
    render() {
        let rides = this.state.searchedRides.map((ride,i)=><RideCard key={i} {...ride} selectRideHandler={this.showSelectedRide}/>)
        let selectedRide = this.state.selectedRide
        return(
            <div className='container'>
                <SearchBar searchRideHandler={this.searchRideHandler}/>
                <SidePopup show={this.state.showPopup} closePopup={this.closePopup}>
                    <BookingRide {...selectedRide}/>
                </SidePopup>
                {rides}
            </div>
        )
    }
}
export default SearchRide;