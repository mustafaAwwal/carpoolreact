import React from 'react'
import styled from 'styled-components';
import LoginBackground from '../../../assets/backgrounds/loginBackground.svg';
import {LoginForm} from './loginform'
export class Login extends React.Component {
    render() {
        return(
            <LoginContainer className='container-fluid'>
                <div className="row align-items-stretch">
                    <div className="col-lg-6 col-md-8 col-12 border-right bg-white d-flex justify-content-center align-items-center">
                        <div className="content">
                            <h2 className='text-success text-center'>Login</h2>
                            <LoginForm />
                        </div>
                    </div>
                </div>

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

