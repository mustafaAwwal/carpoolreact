import React from 'react';
import styled from 'styled-components';
import {getAllCities} from '../../services/secure/city-service'
import SearchBarForm from './search-bar-form';
class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cities: []
        }
        this.searchRides = this.searchRides.bind(this)
    }
    componentDidMount(){
        getAllCities().subscribe(
            res=>{
                this.setState({cities: res.payload})
            }
        )
    }

    searchRides(values) {
        let formData = values;
        let departureCity = this.state.cities.find(city => city.name === values.departure)
        let destinationCity = this.state.cities.find(city => city.name === values.destination)
        formData.departureCoOrdinates = departureCity.coOrdinates
        formData.destinationCoOrdinates = destinationCity.coOrdinates
        this.props.searchRideHandler(formData)
    }
    render() {
        return(
            <BarContainer>
                <SearchBarForm formSubmission={this.searchRides} cities={this.state.cities}/>
            </BarContainer>
        )

    }
}
export const BarContainer = styled.div`

`
export default SearchBar;