import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import CollapsibleNavbar from "./Navbar";
import { generalSelector } from "../components/slice/generalSlice";
import { useSelector } from "react-redux";
const Root = () => {
  const { darkMode } = useSelector(generalSelector);
  return (
    <div
      className={
        darkMode ? "bg-dark text-white" : "bg-secondary-subtle text-dark"
      }
    >
      <CollapsibleNavbar />
      <Outlet />
    </div>
  );
};

export default Root;
