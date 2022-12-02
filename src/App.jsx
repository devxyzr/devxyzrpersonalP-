import React from 'react';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Contact from './components/Contacts/Contact';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Portafolio from './components/Portafolio/Portafolio';
import Testimonials from './components/Testimonials/Testimonials';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Experience />
      <Services />
      <Portafolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
