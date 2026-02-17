import MainLayout from "../../layout/MainLayout";
import { TextField, Button } from "@mui/material";

const AddItem = () => {
  return (
    <MainLayout>
      <h1 className="text-lg font-semibold mb-4">
        Add New Item
      </h1>

      <div className="flex flex-col gap-4">
        <TextField label="Item Name" fullWidth />
        <TextField label="Category" fullWidth />
        <TextField label="Quantity" fullWidth />
        <TextField label="Cost Price" fullWidth />
        <TextField label="Sale Price" fullWidth />

        <Button variant="contained">SAVE</Button>
      </div>
    </MainLayout>
  );
};

export default AddItem;
