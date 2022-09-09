//import logo from './logo.svg';
import { render } from '@testing-library/react';
import React from 'react';
import EventHandling from './Components/EventHandling'

class App extends React.Component
{
  render()
  {
    return(
      <div>
        <EventHandling/>
    
      </div>

    );
  }
}


export default App;
