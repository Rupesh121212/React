//import logo from './logo.svg';
import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

import Prop from './Components/Prop'

class App extends React.Component
{
  render()
  {
    return(
      <div>
         <Prop name="Rupesh" last="Kumar"></Prop>
        </div>

    );
  }
}


export default App;
