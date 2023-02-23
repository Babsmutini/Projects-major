import React from "react";
import Frame from "./Frame";
import "./Layout.css";
import Sidebar from "./Sidebar";
const Layout = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <Frame/>
    </div>
  );
};

export default Layout;
