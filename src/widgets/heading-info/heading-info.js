import React from 'react';
const HeadingInfo = ({heading,info})=>{
    return (
        <>
        <h4 className="text-success">
            {heading}
        </h4>
        <p>{info}</p>
        </>
    )
}

export default HeadingInfo;