import React from 'react';
import store from '../../redux/store';
import styled from 'styled-components';
import success from '../../assets/icons/success.svg';
import error from '../../assets/icons/error.svg';
import { filter } from 'rxjs/operators';
class Notification extends React.Component {
    state = {
        msg: '',
        msgtype: 'error',
        show: false
    }
    show = {
        transform: 'translateY(0%)',
        transition: '400ms'
    }
    hide = {
        transform: 'translateY(100%)',
        transition: '400ms'
    }
    componentDidMount(){
        store.subscribe(()=>
            {   let newState = store.getState().notificationReducer;
                this.setState({...this.state,msg:newState.msg,msgtype:newState.msgtype,show:true})
                setTimeout(() => {
                    this.setState({...this.state,show:false})
                }, 2000);
            }
        )
    }
    render() {
        let styles = this.state.show ? this.show: this.hide
        let image  = this.state.msgtype === 'success' ? success:error
        return(
            <NotificationContainer className='shadow-lg bg-white fixed-bottom d-flex align-items-center justify-content-center' style={styles}>
                <div className="d-flex">
                    <ImageWrapper>
                        <img src={image} alt=''/> 
                    </ImageWrapper>
                    <div className='d-flex align-items-center ml-2'>
                        <h2>{this.state.msg}</h2>
                    </div>
                </div>
            </NotificationContainer>
        )
    }
}

export const NotificationContainer = styled.div`
    min-height:150px;
    border-radius:40px 40px 0px 0px;
    
`
export const ImageWrapper = styled.div`
    height: 50px;
    img {
        height: 100%;
    }
`
export default Notification;