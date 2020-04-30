import React from 'react';
import styled from 'styled-components';
import MultiColorHeading from '../../../widgets/multi-color-heading/multi-color-heading';
import MakeRideForm from './make-ride-form';
import {getAllCities} from '../../../services/secure/city-service';
import {makeRideRequest} from '../../../services/secure/rides-service'
class MakeRide extends React.Component {
    state = {
        cities: []
    }
    subscription = []
    componentDidMount() {
        this.subscription.push(getAllCities().subscribe(res=>{
            this.setState({cities: res.payload})
        }))
    }
    makeRideHandler = (driveData)=>{
        let formData = driveData;
        let departureCity = this.state.cities.find(city => city.name === driveData.departure)
        let destinationCity = this.state.cities.find(city => city.name === driveData.destination)
        formData.departureCoOrdinates = departureCity.coOrdinates
        formData.destinationCoOrdinates = destinationCity.coOrdinates
        this.subscription.push(makeRideRequest(formData).subscribe());
    }
    componentWillUnmount = ()=>{
        this.subscription.map(sub=>sub.unsubscribe())
    }
    render() {
        return(
            <DriveContainer className='container shadow p-3'>
                <MultiColorHeading black='Make' green='Ride' />
                <MakeRideForm makeRideHandler={this.makeRideHandler} cities={this.state.cities}/>
            </DriveContainer>
        )
    }
}

export const DriveContainer = styled.div`
    border-radius: 20px
`

export default MakeRide;