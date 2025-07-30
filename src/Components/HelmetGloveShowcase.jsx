import React from 'react';
import './HelmetGloveShowcase.css';

const products = [
  {
    img: "https://www.shutterstock.com/image-vector/illustration-shows-cricket-helmet-blue-600nw-1238225935.jpg",
    price: "$50",
  },
  {
    img: "https://i.pinimg.com/564x/51/b3/06/51b306b54a90df71e1f63ff3a38ade7a.jpg",
    price: "$50",
  },
  {
    img: "https://media.istockphoto.com/id/491945774/photo/close-up-of-cricket-batting-gloves.jpg?s=612x612&w=0&k=20&c=9ViKISu5YxBYeheP-2lLDAM3tp8roYW0fqdbeC1AU6s=",
    price: "$50",
  },
  {
    img: "https://tornadosportscompany.com/cdn/shop/products/HELMETSPAKISTAN2.jpg?v=1671609085",
    price: "$50",
  },
  {
    img: "https://valuebox.pk/cdn/shop/products/hcUunKSTr9.jpg?v=1718064744",
    price: "$50",
  },
];

const HelmetGloveShowcase = () => {
  return (
    <div className="helmet-glove-showcase">
      <h2 className="section-title">POPULAR HELMETS & GLOVES</h2>
      <div className="helmet-glove-grid">
        {products.map((product, index) => (
          <div className="helmet-glove-card" key={index}>
            <img src={product.img} alt={`Helmet/Glove ${index + 1}`} />
            <p className="price">{product.price}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelmetGloveShowcase;
