//import logo from './logo.svg';
import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

import Form from './Components/Form';

class App extends React.Component
{

  render()
  
  {
   return (
    <div className="App">
      
      <Form></Form>
    </div>
   )
     
  }
}


export default App;
