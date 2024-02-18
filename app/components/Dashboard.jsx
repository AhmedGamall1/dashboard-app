"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Outlet from "./Content/Content";

const Dashboard = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="flex">
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <Outlet openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </div>
  );
};

export default Dashboard;
