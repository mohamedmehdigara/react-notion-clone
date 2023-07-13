import logo from './logo.svg';
import './App.css';
import EditableBlock from './components/EditableBlock';
import EditablePage from './components/EditablePage';
import SelectMenu from './components/SelectMenu';
import React from 'react';

function App() {
  return (
    <div className="App">
      <EditableBlock/>
      <EditablePage/>
      <SelectMenu/>
    </div>
  );
}

export default App;
