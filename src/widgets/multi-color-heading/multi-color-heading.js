import React from 'react';

const MultiColorHeading = ({black,green}) => {
    return (
        <>
            <h2 className="font-weight-bold border-bottom">{black} <span className="text-success">{green}</span> </h2>

        </>
    )
}

export default MultiColorHeading;