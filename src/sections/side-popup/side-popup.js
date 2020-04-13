import React from 'react';
import styled from 'styled-components';

const SidePopup = props=> {
    
    let styles = {
        show: {
            width: '100%',
            transition: '400ms'
        },
        hide: {
            width: '0%',
            padding:'0px',
            margin:'0px',
            transition: '400ms',
        }
    }
    return (
        <SidePopupContainer className='container-fluid' style={props.show ? styles.show:styles.hide}>
            {props.show && <div className="row">
                <div className="content col-lg-6 col-md-8 col-12 bg-white">
                    {props.children}
                </div>
            </div>}

        </SidePopupContainer>
    )

}
export const SidePopupContainer = styled.div`
    min-height:100vh;
    background-color: rgba(55,55,55,0.5);
    position: fixed;
    top: 0px;
    left:0px;
    z-index: 100;
    .row {
        min-height:100vh;
        display: inherit;
        
        .content {
            min-height:100vh
        }
    }
`
export default SidePopup;