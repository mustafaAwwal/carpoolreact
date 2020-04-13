import React from 'react';
import styled from 'styled-components';
import store from '../../redux/store';
import SimpleLoader from './simple-loader'
export class Loader extends React.Component{
    state = {
        visibility: false,
        position: 'center'
    }
    styles = {
        'center': {
            'justifyContent':'center'
        },
        'start':{
            'justifyContent':'start'
        },
        'end':{
            'justifyContent':'end'
        }
    }
    componentDidMount(){
        store.subscribe(()=>{
            let newState = store.getState().loaderReducer;
            this.setState({visibility:newState.visibility,position:newState.position})
        })
    }
    render(){
        let style = {...this.styles[this.state.position]}
        
        return(
            <>
                {this.state.visibility && 
                    <LoaderContainer className='fixed-top' style={style}>
                        <SimpleLoader />
                    </LoaderContainer>
                }
            </>


        )
    }
}

export const LoaderContainer = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    .d-flex {
        min-height: 100vh
    }
`

export default Loader;