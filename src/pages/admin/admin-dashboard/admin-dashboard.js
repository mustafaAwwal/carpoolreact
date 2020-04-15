import React from 'react';
import SearchBar from '../../../sections/search-bar/search-bar';
import {getAllRidesRequest,searchRides} from '../../../services/secure/rides-service';
import RideCard from '../../../sections/ride-card/ride-card';
import SidePopup from '../../../sections/side-popup/side-popup';
import RideInfo from '../../../sections/ride-info/ride-info'
import { AdminStats } from './admin-stats';
export class AdminDashboard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            rides: [],
            selectedRide: {},
            showRide: false
        }
        this.selectedRide = this.selectedRide.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.searchRide = this.searchRide.bind(this)
    }
    subscription = []
    componentDidMount(){
        this.subscription.push(getAllRidesRequest().subscribe(
            res=>{
                this.setState({rides: res.payload})
            }
        ))

    }
    selectedRide(ride) {
        this.setState({showRide:true,selectedRide:ride})
    }
    componentWillUnmount(){
        this.subscription[0].unsubscribe()
    }
    closePopup() {
        this.setState({showRide:false})
    }
    searchRide(ride){
        console.log(ride)
        searchRides(ride).subscribe(
            res=>this.setState({rides:res.payload})
        )
    }
    render(){
        let rides = this.state.rides.map((ride)=><RideCard {...ride} key={ride._id} selectRideHandler={this.selectedRide}/>)
        let selectedRide = this.state.selectedRide;
        return(
            <>
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-xl-9 col-12">
                        <SearchBar searchRideHandler={this.searchRide}/>
                        {rides}
                    </div>
                    </div>

                    <SidePopup show={this.state.showRide} closePopup = {this.closePopup}>
                        <RideInfo {...selectedRide}/>
                    </SidePopup>
                    <AdminStats length={this.state.rides.length}/>
                </div>
            </>
        )
    }
}