import Login from "./containers/Login/Login";
import Products from "./containers/Products/Products";
import Preview from "./containers/Preview/Preview";
import Product from "./containers/Product/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<PrivateRoute />}>
        <Route path="/products" element={<Products />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/preview/:productId" element={<Product />} />
      </Route>

      <Route path="*" element={<div> 404. Page is not found! </div>} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
