import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/Dashboard";
import CategoryPage from "../pages/categories/CategoryPage";
import ItemPage from "../pages/items/ItemPage";
import AddItem from "../pages/items/AddItem";

import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔓 Public */}
        <Route path="/" element={<Login />} />

        {/* 🔐 Protected */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/categories"
          element={
            <ProtectedRoute>
              <CategoryPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/items"
          element={
            <ProtectedRoute>
              <ItemPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-item"
          element={
            <ProtectedRoute>
              <AddItem />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
