import "./Products.css";
import logoProducts from "../../assets/logo-rozetka-products.svg";
import Button from "../../components/Button/Button";
import { FaRegUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Table from "../../components/Table/Table";

function Products() {
  const products = [
    {
      id: 0,
      name: "Lenovo Y50-70",
      quantity: 5,
      price: "25,000.00",
      category: "PC",
    },
    {
      id: 1,
      name: "Nike M Nk Df Acd21",
      quantity: 22,
      price: "4,000.00",
      category: "Clothing",
    },
    {
      id: 2,
      name: "CERSANIT MITO 17",
      quantity: 1337,
      price: "5,000.00",
      category: "Plumbing",
    },
  ];
  return (
    <div className="Products">
      <div className="Block-logo">
        <img src={logoProducts} className="Products-logo" alt="logo" />
      </div>
      <div className="Button-block">
        <div className="Block-icon">
          <Button text="Preview" className="Button-products" />
          <FaRegUser className="Icon-user" />
        </div>
        <div className="Block-icon">
          <Button text="Add product" className="Button-products" />
          <FaPlus className="Icon-plus" />
        </div>
      </div>
      <div className="App">
        <h1 className="Title">Products</h1>
        <Table products={products} />
      </div>
    </div>
  );
}

export default Products;
