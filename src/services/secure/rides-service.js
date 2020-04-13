import {post, base_url} from '../http-functions';

export const searchRides = (searchRideData)=>{
    return post(ridesUrl.searchRide,searchRideData)
}
export const bookRideRequest = ride=>{
    return post(ridesUrl.bookRide,ride)
}
export const makeRideRequest = ride=> {
    return post(ridesUrl.makeRide,ride)
}
export const ridesUrl = {
    searchRide: base_url + 'ride/searchRides',
    bookRide: base_url + 'ride/bookRide',
    makeRide: base_url + 'ride/createRide'
}