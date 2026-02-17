import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";

const AddCategoryDialog = ({ open, setOpen, onAdd }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#ef4444");

  const handleSubmit = () => {
    if (!name) return;

    onAdd({ name, color });

    setName("");
    setColor("#ef4444");
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
      <DialogTitle>Add Category</DialogTitle>

      <DialogContent className="flex flex-col gap-4 mt-2">
        <TextField
          label="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />

        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full h-10"
        />

        <Button variant="contained" onClick={handleSubmit}>
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategoryDialog;
