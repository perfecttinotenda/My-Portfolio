import React from 'react';

import { Header, Footer, About, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar /> 
      <Header />
      <About />
      
      <Footer />
      <Skills /> 
      <Testimonial />
      <Work />
    </div>
  );
}

export default App;