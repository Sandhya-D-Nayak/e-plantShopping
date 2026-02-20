import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      }),
    );
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        }),
      );
    }
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <h3>Total Amount: ${totalAmount}</h3>

      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} width="120" />
          <h4>{item.name}</h4>
          <p>Unit Price: ${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => handleDecrease(item)}>-</button>
          <span style={{ margin: "0 10px" }}>{item.quantity}</span>
          <button onClick={() => handleIncrease(item)}>+</button>

          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>

          <hr />
        </div>
      ))}

      <button onClick={() => alert("Coming Soon")}>Checkout</button>

      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}

export default CartItem;
