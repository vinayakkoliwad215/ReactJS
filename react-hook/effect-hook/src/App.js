import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import HookCounterOne from './components/HookCounterOne'
import ClassCounterOne from './components/ClassCounterOne ';
import ClassMouse from './components/ClassMouse'
import HookMouse from './components/HookMouse'
import MouseContainer from './components/MouseContainer'
import IntervalClassCounter from './components/IntervalClassCounter ';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching'


function App() {
  return (
    <div className="App">
     <ClassCounterOne />
		<HookCounterOne />
				{/* <ClassMouse></ClassMouse> */}
				{/* <HookMouse></HookMouse> */}
				<MouseContainer />
				<IntervalClassCounter/>
				<IntervalHookCounter />
				<DataFetching />

    </div>
  );
}

export default App;
