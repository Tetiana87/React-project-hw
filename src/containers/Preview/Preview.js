import "./Preview.css";
import logoProducts from "../../assets/logo-rozetka-products.svg";
import Cart from "../../components/Cart/Cart";

function Preview() {
  const products = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Ноутбук Lenovo Y50-70 Aluminum Black",
      price: "25000₴",
      quantity: 5,
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Ноутбук Lenovo Y50-70 Aluminum Black",
      price: "25000₴",
      quantity: 5,
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Ноутбук Lenovo Y50-70 Aluminum Black",
      price: "25000₴",
      quantity: 5,
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Ноутбук Lenovo Y50-70 Aluminum Black",
      price: "25000₴",
      quantity: 5,
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Ноутбук Lenovo Y50-70 Aluminum Black",
      price: "25000₴",
      quantity: 5,
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Ноутбук Lenovo Y50-70 Aluminum Black",
      price: "25000₴",
      quantity: 5,
    },
  ];
  return (
    <div className="Preview">
      <div className="Block-logo">
        <img src={logoProducts} className="Preview-logo" alt="logo" />
      </div>
      <div className="Cart-block">
        {products.map((product) => (
          <Cart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Preview;
