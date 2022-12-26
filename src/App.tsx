import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Hello } from './components/Hello';
import { PersonList } from './components/PersonList';
const nameList=[{fName:'Josh',
id:1},{fName:'Mark',id:2}]
function App() {
  return (
    <div className="App">
      <Hello name='TYPESCRIPT'/>
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
