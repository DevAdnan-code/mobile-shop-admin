import { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { Badge } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import AddCategoryDialog from "./AddCategoryDialog";

const CategoryPage = () => {
  // ✅ category state
  const [categories, setCategories] = useState([
    { name: "Accessories", color: "#ef4444", count: 2 },
    { name: "Uncategorized", color: "#6b7280", count: 0 },
    { name: "Glass", color: "#3b82f6", count: 5 },
  ]);

  // ✅ dialog open state
  const [open, setOpen] = useState(false);

  // ✅ add category function
  const handleAddCategory = (data) => {
    setCategories([...categories, { ...data, count: 0 }]);
  };

  return (
    <MainLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-lg font-semibold">Categories</h1>

        <button
          onClick={() => setOpen(true)}
          className="text-red-500 font-medium flex items-center gap-1"
        >
          <AddIcon fontSize="small" />
          New Category
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-2 rounded-lg shadow flex items-center mb-4">
        <SearchIcon className="text-gray-400 mr-2" />

        <input
          type="text"
          placeholder="Search category"
          className="outline-none w-full"
        />
      </div>

      {/* Category List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 border-b"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-1.5 h-6 rounded"
                style={{ background: cat.color }}
              ></div>

              <p className="font-medium">{cat.name}</p>
            </div>

            <Badge badgeContent={cat.count} color="error" />
          </div>
        ))}
      </div>

      {/* ✅ Add Category Dialog */}
      <AddCategoryDialog
        open={open}
        setOpen={setOpen}
        onAdd={handleAddCategory}
      />
    </MainLayout>
  );
};

export default CategoryPage;
