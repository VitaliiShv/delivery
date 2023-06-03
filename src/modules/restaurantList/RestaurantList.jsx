import SectionContainer from "../sectionContainer/SectionContainer";
import styles from "./RestaurantList.module.css";

const RestaurantList = ({ restaurants, onRestaurantClick }) => {
  const elements = restaurants.map(({ name, id }) => (
    <li key={id} className={styles.item}>
      <button onClick={() => onRestaurantClick(id)} className={styles.button}>
        {name}
      </button>
    </li>
  ));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Restaurants:</h1>
      <ul className={styles.itemList}>{elements}</ul>
    </div>
  );
};

export default RestaurantList;
