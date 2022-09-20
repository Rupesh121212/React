//import logo from './logo.svg';
import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

import PropList, { PostList } from './Components/PostList'

class App extends React.Component
{

  render()
  
  {
   return (
    <div className="App">

      <PostList></PostList>
      
       
      
    </div>
   )
     
  }
}


export default App;
