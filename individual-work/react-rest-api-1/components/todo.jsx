import React from 'react';

const Todo = (props) => {
    return (
        <div className={props.myClass}>
            <h1>
               <span className={props.mySpan}>Title:</span> {props.title}
            </h1>
            <h2>
                 <span className={props.mySpan}>UserID:</span> {props.userid}
            </h2>
            <p>
                <span className={props.mySpan}>ID:</span> {props.id}
            </p>
        </div>
    );
};

export default Todo;
