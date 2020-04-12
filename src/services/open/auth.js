import {post, base_url} from '../http-functions'
export const loginRequest = formData => {
    return post(authUrls.login,formData);
}

export const authUrls = {
    login: base_url + 'user/login'
}