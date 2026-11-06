
import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: "$999", inStock: true },
    { id: 2, name: "Phone", price: "$699", inStock: false },
    { id: 3, name: "Tablet", price: "$499", inStock: true },
  ]);

  const [filter, setFilter] = useState("all");

  const handleRemove = (id) => {
    setProducts((previousProducts) =>
      previousProducts.filter((product) => product.id !== id)
    );
  };

  const filteredProducts = products.filter((product) => {
    if (filter === "inStock") {
      return product.inStock;
    }

    if (filter === "outOfStock") {
      return !product.inStock;
    }

    return true;
  });

  return (
    <div>
      <h1 id="header">Product Dashboard</h1>

      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <Button onClick={() => setFilter("all")}>
          All Products
        </Button>

        <Button onClick={() => setFilter("inStock")}>
          In Stock
        </Button>

        <Button onClick={() => setFilter("outOfStock")}>
          Out of Stock
        </Button>
      </Stack>

      <ProductList
        products={filteredProducts}
        onRemove={handleRemove}
      />
    </div>
  );
};

export default App;