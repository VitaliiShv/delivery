import styles from "./OrderPage.module.css";
import CartList from "../../modules/cartList/CartList";
import OrderForm from "../../modules/orderForm/OrderForm";
import { useEffect, useState } from "react";
import { getCart, removeProductFromCart } from "../../shared/api";
import Notiflix from "notiflix";

const OrderPage = () => {
  const [cart, setCart] = useState([]);
  const [cartError, setCartError] = useState(null);
  const [total, setTotal] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  function handleTotal(total) {
    setTotal(total);
  }

  const makeRequest = (formData, cart, total) => {
    if (cart.length <= 0) {
      Notiflix.Notify.failure("Your cart is empty");
      return;
    }
    const reqObj = { ...formData, order: cart, totalPrice: total };
    console.log(reqObj);
  };

  const handleSubmit = (data) => {
    setFormData(() => ({ ...data }));
    makeRequest(data, cart, total);
  };

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cart = await getCart();
        setCart(cart);
      } catch (error) {
        setCartError(error.message);
      }
    };

    fetchCart();
  }, []);

  const onDeleteItem = async (id) => {
    try {
      await removeProductFromCart(id);
      const updatedCart = cart.filter((item) => item.id !== id);
      setCart(updatedCart);
    } catch (error) {
      setCartError(error.message);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <OrderForm onSubmitForm={handleSubmit} />
        <CartList
          cart={cart}
          onDeleteItem={onDeleteItem}
          handleTotal={handleTotal}
        />
      </div>
      <div className={styles.submitBlock}>
        <div>Total price {total}</div>
        <button type="submit" form="orderForm" className={styles.submitButton}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default OrderPage;
