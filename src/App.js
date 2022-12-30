import React from 'react';
import './App.css';
import Distrito from './components/Distritos';
import Estados from './components/Estados';
import Municipios from './components/Municipios';
import Mapa from './components/Mapa';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Estados />
      <Municipios />
      <Distrito />
      <Mapa />
    </div>
  );
}

export default App;
