import {get, base_url} from '../http-functions';

export const getAllCities = ()=>{
    return get(cityUrls.getAllCities)
}

export const cityUrls = {
    getAllCities: base_url + 'city/getAllCities'
}