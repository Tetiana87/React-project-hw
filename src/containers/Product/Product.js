import "./Product.css";
import React, { useState, useEffect } from "react";
import logoProducts from "../../assets/logo-rozetka-products.svg";
import Info from "../../components/Info/Info";
import { useParams } from "react-router-dom";

function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://6525b61567cfb1e59ce7a0d3.mockapi.io/products/${productId}`
        );
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          console.error("Failed to fetch product");
        }
      } catch (error) {
        console.error("Error fetching product: ", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="Product">
      <div className="Block-logo">
        <img src={logoProducts} className="Product-logo" alt="logo" />
      </div>
      <div className="Info-block">
        <Info product={product} />
      </div>
    </div>
  );
}

export default Product;
