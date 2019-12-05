import React from 'react';
import Header from './components/Header';
import Routes from './router';



import './style.css';
import Main from "./pages/main";


const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);


export default App;
