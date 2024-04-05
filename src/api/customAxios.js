import axios from "axios";

const customAxios = async () => {

  const api = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`,
    timeout: 30000,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      
    },
  });

  return api;
};

export default customAxios;