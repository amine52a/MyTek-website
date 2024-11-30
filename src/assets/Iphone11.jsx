import { useState } from 'react';
import iphone1 from './images/iphone.jpg'; // Make sure the path is correct
import './iphone11.css'; // Ensure the CSS file is applied correctly

const Iphone11Page = () => {
  const [quantity, setQuantity] = useState(1); // Set default quantity to 1

  // Function to handle quantity change
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  // Function to handle add to cart
  const addToCart = () => {
    alert(`Added ${quantity} item(s) to the cart.`);
  };

  return (
    <div className="iphone-details-container">
      <h1 className="product-title">Iphone 11 </h1>
      <div className="product-image-container">
        <img
          src={iphone1}
          alt="IPhone 11"
          className="iphone-image"
        />
      </div>

      <div className="product-info-container">
        <p className="price">Price: 1100 dt</p>
      </div>

      <div className="quantity-container">
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={handleQuantityChange}
          className="quantity-input"
        />
      </div>

      {/* Buttons */}
      <div className="button-container">
        <button className="add-to-cart" onClick={addToCart}>
          Add to Cart
        </button>
        <button className="buy-now">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Iphone11Page;
