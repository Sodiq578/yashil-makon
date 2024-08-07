import React from 'react';
import cardImage from '../assets/handHoldingPlant.svg';

const Card = () => {
  return (
    <div className='container'>
      <p className='card-title'>Foydali Maslahatlar</p>
      <div className='cards-box'>
        <div className='card'>
        <img src={cardImage} alt='Card Image' />
          <h3 className='card-title-title'>Standard</h3>
          <p className='card-text'>Standard Development - mukammallik va sifatga sodiq bo'lgan </p>
        </div>
  
        <div className='card'>
        <img src={cardImage} alt='Card Image' />
          <h3 className='card-title-title'>Standard</h3>
          <p className='card-text'>Standard Development - mukammallik va sifatga sodiq bo'lgan </p>
        </div>

        <div className='card'>
        <img src={cardImage} alt='Card Image' />
          <h3 className='card-title-title'>Standard</h3>
          <p className='card-text'>Standard Development - mukammallik va sifatga sodiq bo'lgan </p>
        </div>

        <div className='card'>
        <img src={cardImage} alt='Card Image' />
          <h3 className='card-title-title'>Standard</h3>
          <p className='card-text'>Standard Development - mukammallik va sifatga sodiq bo'lgan </p>
        </div>

        <div className='card'>
        <img src={cardImage} alt='Card Image' />
          <h3 className='card-title-title'>Standard</h3>
          <p className='card-text'>Standard Development - mukammallik va sifatga sodiq bo'lgan </p>
        </div>


        <div className='card'>
        <img src={cardImage} alt='Card Image' />
          <h3 className='card-title-title'>Standard</h3>
          <p className='card-text'>Standard Development - mukammallik va sifatga sodiq bo'lgan </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
