import "./Product.css";
import { useParams } from "react-router-dom";

const Product = () => {
  let { productId } = useParams();
  return <div>Chosen product is: {productId} </div>;
};

export default Product;
