import styles from "../styles/ProductCard.module.css";

function ProductCard({ product, onRemove }) {
  return (
    <div
      className={`${styles.product} ${
        product.inStock ? styles.available : styles.outOfStock
      } ${product.inStock ? "" : "outOfStockClass"}`}
    >
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default ProductCard;