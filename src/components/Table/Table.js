import "./Table.css";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";

const Table = ({ products }) => {
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>
            ID <FaExchangeAlt className="Icon-arrow" />
          </th>
          <th>
            Category <FaExchangeAlt className="Icon-arrow" />
          </th>
          <th>
            Name <FaExchangeAlt className="Icon-arrow" />
          </th>
          <th>
            Quantity <FaExchangeAlt className="Icon-arrow" />
          </th>
          <th>
            Price <FaExchangeAlt className="Icon-arrow" />
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index} className={index % 2 === 0 ? "even-row" : "odd-row"}>
            <td>{product.id}</td>
            <td>{product.category}</td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>
              <FaPencilAlt className="Icon-pencil" />
              <FaTrashAlt className="Icon-trash" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
