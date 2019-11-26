import React from 'react';
import './reset.css'
import './App.css';
import DisplayBox from './components/DisplayBox';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="App-body">
        <DisplayBox />
      </div>
    </div>
  );
}

export default App;