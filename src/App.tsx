import React from 'react';
import './App.sass';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Register from './components/Register/Register'

function App() {
  return (
    <div className="App">
      <Header />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
