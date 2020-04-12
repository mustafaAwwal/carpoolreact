import {post, base_url} from '../http-functions'
export const loginRequest = formData => {
    return post(authUrls.login,formData);
}
export const signupRequest = formData => {
    return post(authUrls.signup,formData)
}
export const authUrls = {
    login: base_url + 'user/login',
    signup: base_url + 'user/signup'
}