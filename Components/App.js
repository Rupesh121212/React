//import logo from './logo.svg';
import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import Header from './Components/Header'
import CHeader from './Components/CHeader'
/*
const name=<span>Hello React</span>

const newElement=React.createElement('h2',{className:'newElement'},'Hello, Welcome to H2 tag')

const test=function()
{
  alert("Hello Rupesh")
}

const age=function(a)
{
  if (a>18)
  {
      return <span>"Elgible to vote</span>
  }
  else{
       return <span>"Not Elgible to vote</span>
  }
}


function App() {
  return (

    <div className="App">
      <h1>Hello Rupesh kumar, {name} </h1>
      {newElement}
      <button onClick={test}></button>
      {age(7)}
    </div>
  );
}

class App extends React.Component
 {
  render()
  {
    return <h1>Hello! yeah this is class component</h1>
  }
 }
 */
class App extends React.Component
{
  render()
  {
    return(
      <div>
        <Header/>
        <CHeader/>
      </div>

    );
  }
}


export default App;
