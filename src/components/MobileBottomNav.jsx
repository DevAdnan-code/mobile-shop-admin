import {
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SettingsIcon from "@mui/icons-material/Settings";

import { useNavigate } from "react-router-dom";

const MobileBottomNav = () => {
  const navigate = useNavigate();

  return (
    <BottomNavigation
      showLabels
      className="fixed bottom-0 left-0 right-0 shadow-lg z-50"
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
        onClick={() => navigate("/dashboard")}
      />

      <BottomNavigationAction
        label="Categories"
        icon={<CategoryIcon />}
        onClick={() => navigate("/categories")}
      />

      <BottomNavigationAction
        label="Invoices"
        icon={<ReceiptIcon />}
      />

      <BottomNavigationAction
        label="Settings"
        icon={<SettingsIcon />}
      />
    </BottomNavigation>
  );
};

export default MobileBottomNav;
