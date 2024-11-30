import './Cart.css'; // Make sure to style the Cart correctly

export default function Cart({ cartItems, onUpdateQuantity, onRemoveItem }) {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img
              src={item.image}
              alt={item.name}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
            <div className="cart-item-actions">
              <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => onRemoveItem(item.id)}>Remove</button>
            </div>
            
          </div>
        ))
      )}
    </div>
  );
}
