import styled from 'styled-components';
import React from 'react';
import {checkToken} from '../../services/secure/user-service';
import store from '../../redux/store';
import { login } from '../../redux/slices/user-slice';
import { useHistory } from 'react-router-dom';
class AccountBadge extends React.Component {
    state = {
        name: '',
        picture: '',
        showBadge: false
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
                    this.setState({name:res.payload.username,picture:res.payload.picture})
                    store.dispatch(login(res.payload))
                }
            );
        }
    }
    showBadge() {
        this.setState({showBadge:!this.state.showBadge})
    }
    render() {
        return (
            <BadgeContainer className='bg-dark text-light font-weight-light rounded-pill d-flex justify-content-end align-items-center' onClick={()=>{this.showBadge()}}>
                <AccountHeading>{this.state.name}</AccountHeading>
                <img src={this.state.picture} className='rounded-circle h-100' alt=""/>
                <BadgeLinks show={this.state.showBadge}/>
            </BadgeContainer>
        )
    }
}

export const BadgeLinks = props=>{
    let history = useHistory();
    let style = {
        show: {
            transform:'translateX(0%)',
            transition: '400ms'
        },
        hide: {
            transform:'translateX(100%)',
            transition: '400ms'
        }
    }
    let visibleState = props.show ? style.show:style.hide
    let signOut = ()=>{
        localStorage.removeItem('token')
        history.push('/')
    }
    return (
        <BadgeLinkContainer className='shadow d-flex flex-column justify-content-center pb-3 bg-white' style={visibleState}>
            <hr/>
            <button className='btn' type='button' onClick={()=>signOut()}>Signout</button>
        </BadgeLinkContainer>
    )
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

export const BadgeLinkContainer = styled.div`
    position:fixed;
    top:60px;
    right:0px;
    width: 130px;
    border-bottom-left-radius: 20px;
`
export default AccountBadge;