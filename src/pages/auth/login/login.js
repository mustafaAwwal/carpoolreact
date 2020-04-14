import React from 'react'
import styled from 'styled-components';
import LoginBackground from '../../../assets/backgrounds/loginBackground.svg';
import {LoginForm} from './loginform'
import {loginRequest} from '../../../services/open/auth';
import store from '../../../redux/store';
import {login} from '../../../redux/slices/user-slice';
import {Redirect,useLocation} from 'react-router-dom';
export class Login extends React.Component {
    
    state = {
        loginForm: {
            username: '',
            password: '',
            role: 'user'
        },
        loggedIn: false
    }
    componentDidMount() {
        console.log(this.props)
    }
    setFormData = (formData) =>{
        this.setState({...this.state,loginForm:formData})
        loginRequest(this.state.loginForm).subscribe(
            res=>{
                store.dispatch(login(res.payload))
                localStorage.setItem('token',res.payload.token);
                localStorage.setItem('role',res.payload.role)
                this.setState({loggedIn:true,role:res.payload.role})
            }
        )
    }
    render() {
        let role = this.state.role;
        return(
            <LoginContainer className='container-fluid'>
                <div className="row align-items-stretch">
                    <div className="col-lg-6 col-md-8 col-12 border-right bg-white d-flex justify-content-center align-items-center">
                        <div className="content">
                            <h2 className='text-success text-center'>Login</h2>
                            <LoginForm formSubmission = {this.setFormData}/>
                        </div>
                    </div>
                </div>
                {this.state.loggedIn && <LoginRedirect role={role}/>}
            </LoginContainer>
        )
    }
}

export const LoginContainer = styled.div`
    min-height: 100vh;
    background: url(${LoginBackground});
    background-repeat: no-repeat;
    background-position: top right;
    background-size: 100% auto;
    .row {
        min-height: 100vh;
    }
    @media(max-width:768px){
        padding-top:60px;
    }
`

export const LoginRedirect = props => {
    let location = useLocation();
    let path = props.role === 'user' ? '/user/searchRide': '/admin/dashboard'
    let {from}   = location.state || {from:{pathname:path}};
    console.log(from)
    return (
        <Redirect to ={from} />
    )
}