import RestaurantList from "../../modules/restaurantList/RestaurantList";
import ProductsList from "../../modules/productsList/ProductsList";
import styles from "./ShopPage.module.css";
import { useEffect, useState } from "react";
import {
  getAllRestaurants,
  getAllProducts,
  getProductByRestaurant,
  addProductToCart,
} from "../../shared/api";
import Notiflix from "notiflix";

const ShopPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantsError, setRestaurantsError] = useState(null);
  const [products, setProducts] = useState([]);
  const [productsError, setProductsError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const restaurants = await getAllRestaurants();
        setRestaurants(restaurants);
      } catch (error) {
        setRestaurantsError(error.message);
      }
    };

    const fetchProducts = async () => {
      try {
        const products = await getAllProducts();
        setProducts(products);
      } catch (error) {
        setProductsError(error.message);
      }
    };
    fetchRestaurants();
    fetchProducts();
  }, []);

  const onRestaurantClick = async (id) => {
    try {
      const products = await getProductByRestaurant(id);
      setProducts(products);
    } catch (error) {
      setProductsError(error.message);
    }
  };

  const onProductClick = async (id) => {
    try {
      await addProductToCart(id);
      Notiflix.Notify.success("Your dish added to cart");
    } catch (error) {
      setProductsError(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <RestaurantList
        restaurants={restaurants}
        onRestaurantClick={onRestaurantClick}
      />
      <ProductsList products={products} onProductClick={onProductClick} />
    </div>
  );
};

export default ShopPage;
