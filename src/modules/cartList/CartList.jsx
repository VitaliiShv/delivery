import { useState, useEffect } from "react";
import styles from "./CartList.module.css";

const CartList = ({ cart, onDeleteItem, handleTotal }) => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (event, id) => {
    const updatedQuantities = {
      ...quantities,
      [id]: event.currentTarget.value,
    };
    setQuantities(updatedQuantities);
  };

  useEffect(() => {
    let newTotal = 0;
    cart.forEach(({ id, price }) => {
      const quantity = quantities[id] || 1;
      newTotal += Number(price) * quantity;
    });

    handleTotal(newTotal);
  }, [quantities, cart, handleTotal]);

  const elements = cart.map(({ name, id, price, imgUrl }) => {
    const quantity = quantities[id] || 1;

    return (
      <li key={id}>
        <div className={styles.card}>
          <div className={styles.imgThumb}>
            <img className={styles.img} src={imgUrl} alt="" />
          </div>
          <div className={styles.cardText}>
            <h2>{name}</h2>
            <p>Price:{Number(price) * quantity}</p>
          </div>
          <div className={styles.quantityInput}>
            <label className={styles.label} htmlFor="quantity">
              Quantity
            </label>
            <input
              id="quantity"
              min={1}
              type="number"
              onChange={(event) => {
                handleQuantityChange(event, id);
              }}
            />
          </div>
          <button className={styles.button} onClick={() => onDeleteItem(id)}>
            Delete
          </button>
        </div>
      </li>
    );
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cart:</h1>
      <ul>{elements}</ul>
    </div>
  );
};

export default CartList;
