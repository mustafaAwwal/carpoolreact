import React from 'react';
import userPhoto from '../../assets/icons/user-stupid.svg'
const ImgNull = ({src})=>{
    let img = src === null ? userPhoto: src 
    return <img src={img} alt=""/>
}
export default ImgNull;