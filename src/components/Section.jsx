import React from 'react';
import Card from './Card';
import BackgroundImage from '../assets/image475.png';

const Section = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <h1 className='hero-title'> Yashil <span className="highlight"> Maskan</span></h1>
    <p className='hero-text'> Standard Development - mukammallik va sifatga sodiq bo'lgan to'liq xizmat ko'rsatadigan global qurilish kompaniyasi.</p>
    </section>
  );
};

export default Section;
