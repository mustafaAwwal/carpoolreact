import {post, base_url, get} from '../http-functions';

export const searchRides = (searchRideData)=>{
    return post(ridesUrl.searchRide,searchRideData)
}
export const bookRideRequest = ride=>{
    return post(ridesUrl.bookRide,ride)
}
export const makeRideRequest = ride=> {
    return post(ridesUrl.makeRide,ride)
}
export const bookedRideRequest = ()=>{
    return get(ridesUrl.getBookedRides)
}
export const driverRideRequest = ()=>{
    return get(ridesUrl.getOfferedRides)
}
export const cancelRideRequest = (ride)=>{
    return post(ridesUrl.cancelRide,ride)
}
export const getAllRidesRequest = ()=>{
    return get(ridesUrl.getAllRides);
}
export const ridesUrl = {
    searchRide: base_url + 'ride/searchRides',
    bookRide: base_url + 'ride/bookRide',
    makeRide: base_url + 'ride/createRide',
    getBookedRides: base_url + 'ride/getBookedRides',
    getOfferedRides: base_url + 'ride/getDriverRides',
    cancelRide: base_url + 'ride/cancelRide',
    getAllRides: base_url + 'ride/allRides'
}