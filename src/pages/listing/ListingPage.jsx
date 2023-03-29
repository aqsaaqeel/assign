import { getPizzas } from "../../services/PizzaServices";
import { useEffect,useState, useReducer } from "react";
import { ItemCard,Sidebar } from "../../components";
import { filterReducer } from "./filterReducer";

export const ListingPage = () => {
  const [state, dispatch] = useReducer(filterReducer, {
    allPizzas: [],
    pizzas: [],
    showVeg: false,
    minPrice: 0,
    maxPrice: 10000,
  });

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPizzas();
      dispatch({ type: "SET_ALL_PIZZAS", payload: data });
      dispatch({ type: "SET_PIZZAS", payload: data });
    };
    fetchData();
  }, []);

  function applyPriceFilter() {
    dispatch({ type: "SET_MIN_PRICE", payload: minPrice });
    dispatch({ type: "SET_MAX_PRICE", payload: maxPrice });
    dispatch({ type: "APPLY_FILTER" });
  }

  return (
    <div className="main-container flex">
      <div className="sidebar w-96 border p-10">
        <Sidebar
          state={state}
          dispatch={dispatch}
          minPrice={minPrice}
          maxPrice={maxPrice}
          applyPriceFilter={applyPriceFilter}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
        />
      </div>
      <div className="flex flex-col min-h-screen items-center w-auto p-5">
        <main className="flex-grow">
          <div className="flex flex-wrap justify-center">
            {state.pizzas.map((pizza) => (
              <ItemCard key={pizza.id} pizza={pizza} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
