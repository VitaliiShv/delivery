import axios from "axios";

const instance = axios.create({
  baseURL: "https://delivery-backend-85vw.onrender.com/api",
});

export const getAllRestaurants = async () => {
  const { data } = await instance.get("/restaurants");
  return data;
};

export const getAllProducts = async () => {
  const { data } = await instance.get("/products");
  return data;
};

export const getProductByRestaurant = async (restaurantId) => {
  const { data } = await instance.get(`/products/${restaurantId}`);
  return data;
};

export const getCart = async () => {
  const { data } = await instance.get("/cart");
  return data;
};

export const addProductToCart = async (productId) => {
  const { data } = await instance.put(`/cart/${productId}`);
  return data;
};

export const removeProductFromCart = async (productId) => {
  const { data } = await instance.delete(`/cart/${productId}`);
  return data;
};
