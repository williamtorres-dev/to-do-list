import React from 'react';
import './App.css';
import Home from './views/Home';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Home />
    </div>
  );
};

export default App;
