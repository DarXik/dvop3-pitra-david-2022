import React from 'react';

const TODO = (props) => {
    return (
        <>
            <h1>
                {props.title}
            </h1>
            <h2>
                {props.userid}
            </h2>
            <p>
                {props.id}
            </p>
        </>
    );
};

export default TODO;
