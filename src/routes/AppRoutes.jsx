import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import CategoryPage from "../pages/categories/CategoryPage";
import ItemPage from "../pages/items/ItemPage";
import AddItem from "../pages/items/AddItem";



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/items" element={<ItemPage />} />
<Route path="/add-item" element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
