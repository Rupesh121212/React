//import logo from './logo.svg';
import { render } from '@testing-library/react';
import React from 'react';
import AboutStates from './Components/AboutStates'

class App extends React.Component
{
  render()
  {
    return(
      <div>
        <AboutStates/>
     </div>

    );
  }
}


export default App;
