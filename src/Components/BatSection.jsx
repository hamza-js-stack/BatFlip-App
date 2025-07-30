import React from 'react';
import BatCard from '../components/BatCard';
import bats from '../data/bats';
import './BatSection.css';

const BatSection = () => {
  const handleAddToCart = (bat) => {
    console.log('Added to cart:', bat);
    // Add your cart logic here
  };

  return (
    <div className="bat-section">
      <h2 className="bat-title">Popular Cricket Bats</h2>
      <div className="bat-grid">
        {bats.map((bat, index) => (
          <BatCard
            key={index}
            img={bat.img}
            name={bat.name}
            price={bat.price}
            onAddToCart={() => handleAddToCart(bat)}
          />
        ))}
      </div>
    </div>
  );
};

export default BatSection;
