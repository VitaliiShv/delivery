import styles from "./ProductsList.module.css";

const ProductsList = ({ products, onProductClick }) => {
  const elements = products.map(({ name, id, price, restaurant, imgUrl }) => (
    <li key={id}>
      <div className={styles.thumb}>
        <button className={styles.card} onClick={() => onProductClick(id)}>
          <img className={styles.img} src={imgUrl} />
          <h2>{name}</h2>
          <p>Price:{price}</p>
          <p>{restaurant}</p>
          <p className={styles.cardText}>Add to cart </p>
        </button>
      </div>
    </li>
  ));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dishes:</h1>
      <ul className={styles.cardSet}>{elements}</ul>
    </div>
  );
};

export default ProductsList;
