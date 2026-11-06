
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

      <p>
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>

      <img
        src={product.image || "/vite.svg"}
        alt={product.name}
        width="100"
      />

      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default ProductCard;
