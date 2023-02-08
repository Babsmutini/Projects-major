import React from "react";

import "./Layout.css";
import { useSelector } from 'react-redux';
import Sidebar from "./Sidebar";
const Layout = () => {


  return (
    <div>
      <Sidebar/>
    </div>
  );
};

export default Layout;
