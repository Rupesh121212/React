import React, {useState} from 'react'

export default function HookCounter () {
    //const channelName=useState("Rupesh Kumar")
     const [channelName,setName]=useState("Rupesh kumar")

     const stateHandler=()=>{
        //channelName[1]("Ram You tuber")
        setName("Ram You tuber")
     }



  return (
    <div>
        {channelName}
        <button onClick={stateHandler}>Click Me</button>



    </div>
  )
}
