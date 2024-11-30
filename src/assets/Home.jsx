import { useContext, useState } from 'react';
import { Product } from './Product'; // Ensure this path is correct
import { SearchContext } from './Navs/Searchcontext'; // Ensure this import path is correct
import { Link } from 'react-router-dom'; // Import Link for navigation
import Cart from './cart'; // Import Cart component
import './home.css';

export default function Home() {
  const { searchQuery } = useContext(SearchContext); // Get the search query from context
  const [selectedCategory, setSelectedCategory] = useState('All products'); // Track selected category
  const [selectedPrice, setSelectedPrice] = useState(''); // Track selected price range
  const [cartItems, setCartItems] = useState([]); // State to manage cart items
  const [isCartOpen, setIsCartOpen] = useState(false); // Manage cart visibility

  // Toggle cart visibility
  const handleCartToggle = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  // Add item to cart
  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === product.id);
      if (existingItem) {
        // If the item already exists, increment quantity
        return prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Otherwise, add the item with a quantity of 1
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Filter products by search query, category, and price
  const filteredBySearch = Product.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredByCategory =
    selectedCategory === 'All products'
      ? filteredBySearch
      : filteredBySearch.filter(
          (product) =>
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const getPriceAsNumber = (price) => parseFloat(price.replace(/[^0-9.-]+/g, ''));

  const filteredByPrice = selectedPrice
    ? filteredByCategory.filter((product) => {
        const price = getPriceAsNumber(product.price);
        if (selectedPrice === 'all') return price <= 999999999;
        if (selectedPrice === 'low') return price <= 50;
        if (selectedPrice === 'medium') return price > 300 && price <= 1000;
        if (selectedPrice === 'high') return price > 1000;
        return true;
      })
    : filteredByCategory;

  return (
    <div className="home-container" style={{ display: 'flex', gap: '20px' }}>
      {/* Cart Icon */}
      <div className="cart-icon" onClick={handleCartToggle}>
        <i className={`fas ${isCartOpen ? 'fa-times' : 'fa-shopping-cart'}`}></i> 
        {/* Toggle the icon between cart and close icon */}
      </div>

      {/* Cart Pop-out */}
      {isCartOpen && (
        <div className={`cart-popup ${isCartOpen ? 'open' : ''}`}>
          <Cart
            cartItems={cartItems}
            onUpdateQuantity={(id, newQuantity) => {
              setCartItems((items) =>
                items.map((item) =>
                  item.id === id ? { ...item, quantity: newQuantity } : item
                )
              );
            }}
            onRemoveItem={(id) => {
              setCartItems((items) => items.filter((item) => item.id !== id));
            }}
          />
        </div>
      )}

      {/* Sidebar */}
      <div className="sidebar">
        <div className="category">
          <h3>Category</h3>
          {['All products', 'Phone', 'Accessories', 'Airpods'].map((category) => (
            <label key={category}>
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
              />
              {category}
            </label>
          ))}
        </div>

        <div className="price">
          <h3>Price</h3>
          {[
            { label: 'Show all', value: 'all' },
            { label: '0-50 dt', value: 'low' },
            { label: '300-1000 dt', value: 'medium' },
            { label: '1000+ dt', value: 'high' },
          ].map((price) => (
            <label key={price.value}>
              <input
                type="radio"
                name="price"
                value={price.value}
                checked={selectedPrice === price.value}
                onChange={(e) => setSelectedPrice(e.target.value)}
              />
              {price.label}
            </label>
          ))}
        </div>
      </div>

      {/* Product List */}
      <div className="product-list" style={{ flex: 1 }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {filteredByPrice.length > 0 ? (
            filteredByPrice.map((product) => (
              <li key={product.id} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
                <h2>{product.name}</h2>
                <Link to={`/product/${encodeURIComponent(product.name)}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      marginBottom: '10px',
                    }}
                  />
                </Link>
                <p>{product.price}</p>
                {/* Add to Cart Button */}
                <button
  onClick={() => handleAddToCart(product)}
  style={{ backgroundColor: 'white', color: 'black', border: '1px solid #ddd' }}
>
  Buy Now
</button>

              </li>
            ))
          ) : (
            <p>No products found</p>
          )}
        </ul>
      </div>
    </div>
  );
}
