import {Route,Redirect} from 'react-router-dom';
import React from 'react';
export const UserRoute = ({children,...rest})=> {
    let token = getToken()
    return (
        <Route 
        {...rest}
        render = {
            ({location})=>{
                return token ? children: <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}/>
            }
        }
        />
    )
}

export const GuestRoute = ({children,...rest})=> {
    let token = getToken();
    return(
        <Route 
            {...rest}
            render = {
                ({location})=>{
                    return token ? <Redirect 
                        to = {{
                            pathname:'/user/searchRride',
                            state:{from:location}
                        }}
                    />: children
                }
            }
        />
    )
}

export const getToken = ()=>{
    return localStorage.getItem('token') ? localStorage.getItem('token'): null;
}
