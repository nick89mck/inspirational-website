import React from 'react';
import '../App.css';
import {  GoalTable } from '../components/GoalTable';
import { Quote } from '../features/quotes/Quote';

function App() {
  return (
    <div>
      <GoalTable />
      <Quote />
    </div>
  );
}

export default App;
