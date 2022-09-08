import React from "react";

class AboutStates extends React.Component
{
    constructor()
    {
        super();
        this.state={
            msg:"Hello! This is Rupesh state Learning"
        }
    }
    subscribe()
    {
        this.setState(
            {
            msg:"Thanks for subscribing"
            })
    }
    render()
    {
        
        return(
            <div>
                  <h1>{this.state.msg}</h1>
                   <button onClick={ () => { this.subscribe()}}>Subscribe</button>
             </div>
        ) 
       
    }
}
export default AboutStates