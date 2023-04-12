import React from "react";
import { Outlet } from "react-router";
import Frame from "./Frame";
import "./Layout.css";
import Sidebar from "./Sidebar";
const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <Frame/>
     
    </div>
  );
};

export default Layout;
