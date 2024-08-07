import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Carousel from '../components/Carousel';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Section />
      <Card />
     <Carousel />
    </div>
  );
};

export default Home;
