export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALL_PIZZAS":
      return { ...state, allPizzas: action.payload };
    case "SET_PIZZAS":
      // const { showVeg, minPrice, maxPrice } = state;
      return { ...state, pizzas: action.payload };
    case "SHOW_VEG":
      return {
        ...state,
        showVeg: action.payload,
        pizzas: state.allPizzas.filter(
          (pizza) =>
            (action.payload ? pizza.isVeg : true) &&
            pizza.price >= state.minPrice &&
            pizza.price <= state.maxPrice
        ),
      };
    case "SHOW_NON_VEG":
      return {
        ...state,
        showVeg: action.payload,
        pizzas: state.allPizzas.filter(
          (pizza) =>
            (!action.payload ? !pizza.isVeg : true) &&
            pizza.price >= state.minPrice &&
            pizza.price <= state.maxPrice
        ),
      };

    case "SET_MIN_PRICE":
      return { ...state, minPrice: action.payload };
    case "SET_MAX_PRICE":
      return { ...state, maxPrice: action.payload };
    case "APPLY_FILTER":
      const newPizzas = state.allPizzas.filter(
        (pizza) =>
          // (showVeg ? pizza.isVeg : true) &&
          pizza.price >= state.minPrice && pizza.price <= state.maxPrice
      );
      return { ...state, pizzas: newPizzas };
      case "SET_RATING":
        const rating = action.payload;
        const filteredPizzas = state.allPizzas.filter(
          (pizza) =>
            pizza.rating >= rating && pizza.rating < rating + 1
        );
        return {
          ...state,
          rating,
          pizzas: filteredPizzas,
        };
    default:
      return state;
  }
};
