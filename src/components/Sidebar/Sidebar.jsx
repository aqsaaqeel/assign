export const Sidebar = ({state,
  dispatch,
  minPrice,
  maxPrice,
  applyPriceFilter,
setMaxPrice,
setMinPrice}) => {
    
  return (
    <>
      <h1 className="font-bold">Filters: </h1>
      <div className="p-3">
        <h2>Veg or Non-Veg</h2>
        <input
          type="checkbox"
          id="Veg"
          name="Veg"
          onClick={() => dispatch({ type: "SHOW_VEG" })}
        />
        <label for="Veg"> Veg</label>
        <br></br>
        <input
          type="checkbox"
          id="NonVeg"
          name="NonVeg"
          onClick={() => dispatch({ type: "SHOW_NON_VEG" })}
        />
        <label for="NonVeg"> Non-veg</label>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2>Price</h2>
        <label htmlFor="min-price" className="block mb-2">
          Min Price:
        </label>
        <input
          id="min-price"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border border-gray-300 px-2 py-1 rounded-lg w-full mb-4"
        />

        <label htmlFor="max-price" className="block mb-2">
          Max Price:
        </label>
        <input
          id="max-price"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border border-gray-300 px-2 py-1 rounded-lg w-full mb-4"
        />

        <button
          onClick={() => applyPriceFilter()}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Apply Filter
        </button>
      </div>
      <div className="p-3">
        <h2>Rating</h2>
        <input
          type="radio"
          id="1star"
          name="Rating"
          onClick={() => dispatch({ type: "SET_RATING", payload: 1 })}
        />
        <label for="1star"> 1 Star</label>
        <br></br>
        <input
          type="radio"
          id="2star"
          name="Rating"
          onClick={() => dispatch({ type: "SET_RATING", payload: 2 })}
        />
        <label for="2star"> 2 star</label>
        <br></br>
        <input
          type="radio"
          id="3star"
          name="Rating"
          onClick={() => dispatch({ type: "SET_RATING", payload: 3 })}
        />
        <label for="3star"> 3 star</label>
        <br></br>
        <input
          type="radio"
          id="4star"
          name="Rating"
          onClick={() => dispatch({ type: "SET_RATING", payload: 4 })}
        />
        <label for="4star"> 4 star</label>
        <br></br>
        <input
          type="radio"
          id="5star"
          name="Rating"
          onClick={() => dispatch({ type: "SET_RATING", payload: 5 })}
        />
        <label for="5star"> 5 star</label>
      </div>
    </>
  );
};
