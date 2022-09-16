
import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

import LifeCycleA from './Components/LifeCycleA'

class App extends React.Component
{

  render()
  
  {
   return (
    <div className="App">
      
        <LifeCycleA></LifeCycleA>
      
    </div>
   )
     
  }
}


export default App;
