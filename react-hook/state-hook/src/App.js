import React from 'react'
import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import ClassCounterTwo from './components/ClassCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';

function App() {
  return (
    <div className="App">
      <HookCounterThree />
      <HookCounterFour />
      <ClassCounterTwo />
      <HookCounterTwo />
      <HookCounter />
      <ClassCounter />
    </div>
  );
}

export default App;
