import axios from "axios";
export const getPizzas = async () => {
    try {
      const response = await axios.get('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  