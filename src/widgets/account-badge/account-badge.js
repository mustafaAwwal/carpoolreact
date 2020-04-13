import styled from 'styled-components';
import React from 'react';
import {checkToken} from '../../services/secure/user-service';
import store from '../../redux/store';
import { login } from '../../redux/slices/user-slice';
class AccountBadge extends React.Component {
    state = {
        name: '',
        picture: ''
    }
    componentDidMount() {
        this.setInitialState()

    }
    setInitialState() {
        let {username,picture} = store.getState().userReducer;
        if(username.length > 0){
            this.setState({name:username,picture:picture})
        }
        else {
            checkToken().subscribe(
                res=>{
                    console.log(res)
                    this.setState({name:res.payload.username,picture:res.payload.picture})
                    console.log(this.state)
                    store.dispatch(login(res.payload))
                }
            );
        }
    }
    render() {
        return (
            <BadgeContainer className='bg-dark text-light font-weight-light rounded-pill d-flex justify-content-end align-items-center'>
                <AccountHeading>{this.state.name}</AccountHeading>
                <img src={this.state.picture} className='rounded-circle h-100' alt=""/>
            </BadgeContainer>
        )
    }
}


export const BadgeContainer = styled.div`
    height: 40px;
    cursor: pointer;
    width: 150px;
    transition:400ms;
    @media (max-width:768px){
        width:40px;
        transition:400ms;
    }
`
export const AccountHeading  = styled.div`
    transition:400ms;
    @media (max-width:768px){
        display:none;
        transition:400ms;
    }
`
export default AccountBadge;