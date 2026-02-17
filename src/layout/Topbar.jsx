import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../context/AuthContext";

const Topbar = ({ setOpen }) => {
  const { logout } = useAuth();

  return (
    
    <div className="bg-white shadow p-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>

        <h1 className="font-semibold text-lg">Admin Panel</h1>
      </div>

      <button className="text-sm bg-red-500 text-white px-3 py-1 rounded" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Topbar;
