import React from 'react';

const widthClass = (Component, className) => {
    return props => {
        return (
            <div className={className}>
                <Component {...props}/>
            </div>
        );
    }
};

export default widthClass;