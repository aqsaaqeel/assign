import { useState } from "react";

export const Popup = ({ pizza, onClose, onSave }) => {
  console.log(typeof(onSave));
  // pizza.toppings[0].items.map((addon) => console.log(addon))
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedToppings, setSelectedToppings] = useState([]);

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleToppingChange = (e) => {
    const toppingId = e.target.value;
    if (e.target.checked) {
      setSelectedToppings((prev) => [...prev, toppingId]);
    } else {
      setSelectedToppings((prev) => prev.filter((id) => id !== toppingId));
    }
  };

  const handleSave = () => {
    onSave(selectedSize, selectedToppings);
  };

  return (
    <>
      {/* Modal overlay */}
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          {/* Background overlay */}
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
  
          {/* Modal panel */}
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              {/* Modal content */}

                  <h3 className="text-lg font-medium mb-2">Choose size:</h3>
                  {pizza.size[0].items.map((item) => (
                    <div key={item.size}>
                      <input
                        type={pizza.size[0].isRadio ? "radio" : "checkbox"}
                        id={`${pizza.id}-${item.size}`}
                        name={`${pizza.id}-size`}
                        value={item.size}
                        onChange={handleSizeChange}
                        checked={selectedSize === item.size}
                        className="mr-2"
                      />
                      <label htmlFor={`${pizza.id}-${item.size}`}>{item.size}</label>
                    </div>
                  ))}
                  <h3 className="text-lg font-medium mt-4 mb-2">Choose topping(s):</h3>
                  {pizza.toppings[0].items.map((item) => (
                    <div key={item.name}>
                      <input
                        type={pizza.toppings[0].isRadio ? "radio" : "checkbox"}
                        id={`${pizza.id}-${item.name}`}
                        name={`${pizza.id}-topping`}
                        value={item.name}
                        onChange={handleToppingChange}
                        checked={selectedToppings.includes(item.name)}
                        className="mr-2"
                      />
                      <label htmlFor={`${pizza.id}-${item.name}`}>{item.name}</label>
                    </div>
                  ))}

            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-500 text-base font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
};
