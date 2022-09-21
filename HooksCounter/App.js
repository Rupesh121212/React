
import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import HookCounter from './Components/HooksCounter';

class App extends React.Component
{

  render()
  
  {
   return (
    <div className="App">

       <HookCounter></HookCounter>
       
      
    </div>
   )
     
  }
}


export default App;
