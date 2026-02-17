import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import MobileBottomNav from "../components/MobileBottomNav.jsx";



const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar open={open} setOpen={setOpen} />

      <div className="flex flex-col flex-1">
        <Topbar setOpen={setOpen} />

        <main className="p-4 pb-20 overflow-y-auto">
  {children}
</main>

<MobileBottomNav />
      </div>
    </div>
  );
};

export default MainLayout;
