//import logo from './logo.svg';
import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import StyleSheet from './Components/StyleSheet';
import Inline from './Components/Inline';

class App extends React.Component
{

  render()
  
  {
   return (
    <div className="App">
      <StyleSheet isvalue={true}></StyleSheet>
      <Inline></Inline>
    </div>
   )
     
  }
}


export default App;
