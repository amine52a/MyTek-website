import { useParams } from 'react-router-dom';
import { Product } from './Product';
import './Iphone11.css';
import { useState } from 'react';

const ProductDetails = () => {
  const { name } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Adjust product quantity
  const handleMinusQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handlePlusQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Add to cart functionality
  const handleAddToCart = () => {
    const product = Product.find((p) => p.name === decodeURIComponent(name));
    if (!product) {
      alert("Product not found");
      return;
    }

    // Get existing cart from localStorage or initialize an empty array
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.name === product.name);

    if (existingProduct) {
      // Update quantity if product already in cart
      existingProduct.quantity += quantity;
    } else {
      // Add new product with selected quantity
      cart.push({ ...product, quantity });
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  // Find the product based on the name
  const product = Product.find((p) => p.name === decodeURIComponent(name));
  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '300px', height: 'auto', marginBottom: '20px' }}
      />
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
      <div>
        <p>Realised in 2019 and was one of the best phones.</p>
      </div>
      <div>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      <div className="productadd">
        <button onClick={handleMinusQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={handlePlusQuantity}>+</button>
      </div>
    </div>
  );
};

export default ProductDetails;
