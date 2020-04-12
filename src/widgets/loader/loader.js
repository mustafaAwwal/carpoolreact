import React from 'react';
import styled from 'styled-components';
import store from '../../redux/store';

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
    componentWillMount(){
        store.subscribe(()=>{
            let newState = store.getState().loaderReducer;
            this.setState({visibility:newState.visibility,position:newState.position})
        })
    }
    render(){
        let displayValue = this.state.visibility ? 'flex': 'none';
        let style = {...this.styles[this.state.position],display:displayValue}
        
        return(
            <LoaderContainer className='fixed-top' style={style}>
                <div className="d-flex h-100 w-50 justify-content-center align-items-center">
                    <div className="spinner-border text-success" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>

            </LoaderContainer>

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