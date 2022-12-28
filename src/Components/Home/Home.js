import React from 'react';
import About from '../Home/About/About';
import Testimonial from '../Home/Testimonial/Testimonial';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Healthy from './Healthy/Healthy';
import Nav from './Nav/Nav';

const Home = () => {
  return (
    <div>
      <Nav />
      <About />
      <Contact />
      <Healthy />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
