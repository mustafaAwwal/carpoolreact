import React from 'react'
import styled from 'styled-components'
import signupBackground from '../../../assets/backgrounds/signupBackground.svg'
import SignupForm from './signupForm'
import { signupRequest } from '../../../services/open/auth'
class Signup extends React.Component {
    subscription = [];
    componentWillUnmount = ()=> {
        this.subscription.map(sub=>sub.unsubscribe())
    }
    registerUser= (formData)=> {
        this.subscription.push(signupRequest(formData).subscribe())
    }
    render() {
        return(
            <SignupContainer className='container-fluid'>
                <div className="row align-items-stretch">
                    <div className="col-lg-6 col-md-8 col-12 bg-white border-right d-flex align-items-center justify-content-center">
                        <div className="content">
                            <h2 className="text-success text-center">Signup</h2>
                            <SignupForm registerHandler={this.registerUser}/>
                            
                        </div>
                    </div>
                </div>
            </SignupContainer>
        )
    }
}

export default Signup;

export const SignupContainer = styled.div`
    min-height: 100vh;
    background: url(${signupBackground});
    background-repeat: no-repeat;
    background-position: right center;
    background-size: auto 100%;
    .row {
        min-height: 100vh;
    }
    @media (max-width:768px){
        padding-top: 60px
    }
`