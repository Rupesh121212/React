import React from 'react'


function changeEvent()
{
    console.log("Hello Event Handling");
    alert("Hello Event Handling");
} 
function EventHandling() {
  return (
    <div>
        <button onClick={changeEvent}>Click Me</button>
    </div>
  )
}

export default EventHandling