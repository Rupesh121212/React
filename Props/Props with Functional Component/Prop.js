import React from "react";
function Prop(props)
{
  return(
     <div>
        <h1>Hello This is fetched by Using Props with Functional concept--- {props.name} {props.last}</h1>
        {props.child}
     </div>
  );
}