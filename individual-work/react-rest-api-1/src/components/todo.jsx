import React, { useState } from "react";
import TailwindColor from "@videsk/tailwind-random-color";

const Todo = (props) => {
  
  console.log(props.color)
  return (
    <div className={props.color + " border-4 lg:text-lg p-2 "}>
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
