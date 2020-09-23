//libraries
import React from 'react';

//components
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';
import Nav from './components/Nav';

//styles
import './App.css';



/** 
 * Top-level App component, renders <Nav/> and <Routes/> components.
 * */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
