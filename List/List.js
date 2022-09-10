import React from "react";

class List extends React.Component
{
    render()
    {
        const number=[1,2,3,4];
        const newNumber=number.map(function(number)
        {
            console.log(number)
            return <li>{number}</li>

        });
        console.log(newNumber)
        return(
            <React.Render>
                <ul>{newNumber}</ul>
            </React.Render>

        )
        
    }
}

export default List;