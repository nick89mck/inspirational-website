import React from 'react';
import '../App.css';
import {  GoalTable } from '../components/GoalTable';
import { Quote } from '../features/quotes/Quote';
import {Weather} from '../features/weather/Weather';

function App() {
  return (
    <div>
      <Weather />
      <GoalTable />
      <Quote />
    </div>
  );
}

export default App;
