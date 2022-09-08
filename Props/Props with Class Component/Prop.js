import React from "react";
class Prop extends React.Component
{ 
    render()
    {
        return(
        <div>
        <h1>Hello This is fetched by Using Props with class concept--- { this.props.name } { this.props.last }</h1>
     </div>
  );
}
}
export default Prop;