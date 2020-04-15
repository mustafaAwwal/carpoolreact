import styled from 'styled-components';
import React from 'react';
import {checkToken} from '../../services/secure/user-service';
import store from '../../redux/store';
import { login } from '../../redux/slices/user-slice';
import { useHistory,Link } from 'react-router-dom';
import ImgNull from '../img-null/img-null'
class AccountBadge extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            picture: '',
            showBadge: false
        }
        this.setInitialState = this.setInitialState.bind(this)
    }

    subscription = []
    componentDidMount() {
        this.setInitialState()

    }
    setInitialState() {
        let {username,picture} = store.getState().userReducer;
        if(username.length > 0){
            this.setState({name:username,picture:picture})
        }
        else {
            this.subscription.push(checkToken().subscribe(
                res=>{
                    this.setState({name:res.payload.username,picture:res.payload.picture})
                    store.dispatch(login(res.payload))
                }
            ));
        }
    }
    componentWillUnmount(){
        this.subscription[0].unsubscribe();
    }
    showBadge() {
        this.setState({showBadge:!this.state.showBadge})
    }
    render() {
        return (
            <BadgeContainer className='bg-dark text-light font-weight-light rounded-pill d-flex justify-content-end align-items-center' onClick={()=>{this.showBadge()}}>
                <AccountHeading>{this.state.name}</AccountHeading>
                <ImageWrapper className='rounded-circle overflow-hidden'>
                    <ImgNull src={this.state.picture} alt=""/>
                </ImageWrapper>
                <BadgeLinks show={this.state.showBadge} links={this.props.links}/>
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
    let bajLinks = links.map(link=><Link to={link.route} key={link.linkName} className='btn border-bottom'>{link.linkName}</Link>)
    return (
        <BadgeLinkContainer className='shadow d-flex flex-column justify-content-center pb-3 bg-white' style={visibleState}>
            { props.links && bajLinks}
            <button className='btn' type='button' onClick={()=>signOut()}>Signout</button>
        </BadgeLinkContainer>
    )
}
export const ImageWrapper = styled.div`
    width:40px;
    height:40px;
    img {
        width:100%;
        height:100%;
    }
`
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
export const links = [
    {
        linkName:'Booked Rides',
        route: '/user/bookedRides'
    },
    {
        linkName:'Offered Rides',
        route: '/user/offeredRides'
    }
]
export default AccountBadge;