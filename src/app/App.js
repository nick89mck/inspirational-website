import React from 'react';
import '../App.css';
import {  GoalTable } from '../components/GoalTable';
import { Quote } from '../features/quotes/Quote';
import {Weather} from '../features/weather/Weather';
import  {Images} from '../features/images/Images';

function App() {
  return (
    <div>
      <Weather />
      <GoalTable />
      <Quote />
      <Images />
    </div>
  );
}

export default App;
