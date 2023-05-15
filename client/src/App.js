import { Route, Routes } from "react-router-dom";
import AddProduct from "./Pages/AddProduct";
import Products from "./Pages/Products";
import "./App.css"
import ProductDetail from "./Pages/ProductDetail";
function App() {
  return (
   <>
   <Routes>
      <Route path="/" element={<Products/>}></Route>
      <Route path="/add" element={<AddProduct/>}></Route>
      <Route path="/:id" element={<ProductDetail/>}></Route>
    </Routes>
   </>
  );
}

export default App;
