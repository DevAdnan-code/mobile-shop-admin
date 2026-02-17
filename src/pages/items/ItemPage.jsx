

import { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom"; 

const ItemPage = () => {
    const navigate = useNavigate(); 
  const [items] = useState([
    {
      name: "Taffen Glass",
      category: "Accessories",
      salePrice: 100,
      qty: 20,
    },
    {
      name: "kom",
      category: "Accessories",
      salePrice: 120,
      qty: 10,
    },
    
  ]);

  return (
    <MainLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-lg font-semibold">All Items (2)</h1>

       <button
  onClick={() => navigate("/add-item")}
  className="text-red-500 font-medium flex items-center gap-1"
>
  <AddIcon fontSize="small" />
  New Item
</button>

      </div>

      {/* Search */}
      <div className="bg-white p-2 rounded-lg shadow mb-3">
        <input
          type="text"
          placeholder="Search item or category"
          className="w-full outline-none"
        />
      </div>

      {/* Item List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 border-b"
          >
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-gray-400 text-sm">
                Qty: {item.qty}
              </p>
            </div>

            <p className="text-red-500 font-semibold">
              ${item.salePrice}
            </p>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default ItemPage;
