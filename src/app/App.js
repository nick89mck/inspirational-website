import React from 'react';
import '../App.css';
import {  GoalTable } from '../components/GoalTable';
import { Quote } from '../features/quotes/Quote';
import {Weather} from '../features/weather/Weather';

import {BackgroundImage} from '../features/images/BackgroundImage';
import {PreviousImageButton} from '../components/PreviousImageButton';
import { NextImageButton } from '../components/NextImageButton';

function App() {
  return (
    <div className='App'>
      <div className='background'>
        <BackgroundImage />
      </div>
      <header>
        <Weather />
      </header>
            
      <GoalTable />
      <aside>
        <PreviousImageButton />
      
        <NextImageButton />
      </aside>
      <Quote />
    </div>
  );
}

export default App;
