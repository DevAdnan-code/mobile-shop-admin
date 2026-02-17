import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = ({ open, setOpen }) => {
  const menu = [
    { text: "Dashboard", path: "/dashboard" },
    { text: "Categories", path: "/categories" },
    { text: "Items", path: "/items" },
  ];

  return (
    <Drawer open={open} onClose={() => setOpen(false)}>
      <div className="w-64">
        <h2 className="text-xl font-bold p-4">Real Mobile</h2>

        <List>
          {menu.map((item, i) => (
            <ListItemButton
              component={Link}
              to={item.path}
              key={i}
              onClick={() => setOpen(false)}
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
