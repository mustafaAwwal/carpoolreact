import {get,base_url} from '../http-functions';

export const checkToken = ()=>{
    return get(secureUserUrls.checkToken)
}

export const secureUserUrls = {
    checkToken: base_url + 'user/checkToken'
}