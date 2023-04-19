import axios from "axios";
export const getData = async () => {
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  