import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom'
export const CartPage = () => {
  const { cartItems, cartCount, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>
      {cartCount === 0 ? (
        <div>Cart is empty, go add items in <Link to="/" className="font-bold cursor-pointer text-xl">Home</Link></div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                <p className="text-gray-500 mb-2">
                  Size: {item.options.size}, Toppings:{" "}
                  {item.options.toppings.join(", ")}
                </p>
                <p className="text-gray-700 mb-2">
                  Price: ${item.price.toFixed(2)}
                </p>
                <p className="text-gray-700 mb-2">
                  Quantity: {item.options.quantity}
                </p>
              </div>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-full mt-4 hover:bg-red-600 focus:outline-none"
                onClick={() => removeFromCart(item)}
              >
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
