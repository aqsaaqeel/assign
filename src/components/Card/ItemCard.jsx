import { useState } from "react";
import { Popup } from "../../components";
export const ItemCard = ({ pizza }) => {
  const [quantity, setQuantity] = useState(1);
  const [showCustomizePopup, setShowCustomizePopup] = useState(false);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };

  const handleAddItem = () => {
    // open customize popup
    setShowCustomizePopup(true);
    console.log("hi");
  };

  const handleToppingChange = (event) => {
    const toppingName = event.target.value;
    const isChecked = event.target.checked;

    // update selected toppings based on checkbox changes
    if (isChecked) {
      setSelectedToppings([...selectedToppings, toppingName]);
    } else {
      setSelectedToppings(
        selectedToppings.filter((topping) => topping !== toppingName)
      );
    }
  };

  const handleSizeChange = (event) => {
    const sizeName = event.target.value;
    const isChecked = event.target.checked;

    // update selected sizes based on radio button changes
    if (isChecked) {
      setSelectedSizes([sizeName]);
    } else {
      setSelectedSizes([]);
    }
  };

  return (
    <div key={pizza.id} className="m-4 w-1/4">
      <img
        src={pizza.img_url}
        alt={pizza.name}
        className="w-full h-48 object-cover rounded-lg shadow-md"
      />
      <div className="mt-4">
        <h3 className="text-lg font-medium">{pizza.name}</h3>
        <p className="mt-2 text-gray-500">{pizza.description}</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-gray-700 font-bold">
            ${Number(pizza.price).toFixed(2)}
          </p>
          <div className="flex items-center">
            <button
              className="text-gray-500 focus:outline-none focus:text-gray-600"
              onClick={handleDecrement}
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8.707-3.293a1 1 0 10-1.414-1.414L6 9.586V8a1 1 0 10-2 0v3a1 1 0 001 1h3a1 1 0 100-2H7.414l3.293-3.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <span className="mx-2 text-gray-700">{quantity}</span>
            <button
              className="text-gray-500 focus:outline-none focus:text-gray-600"
              onClick={handleIncrement}
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm4-9h-3V7a1 1 0 00-2 0v2H6a1 1 0 100 2h3v2a1 1 0 102 0v-2h3a1 1 0 100-2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <button
          className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleAddItem()}
        >
          Add Item
        </button>
        {showCustomizePopup && (
          <Popup pizza={pizza} onClose={() => setShowCustomizePopup(false)} />
        )}
      </div>
    </div>
  );
};
