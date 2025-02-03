import React from "react";
import { useLocation } from "react-router-dom";

const NavBar = ({Menus}) => {
    const location = useLocation();
    const activeMenu = Menus.find((menu) => menu.to === location.pathname);
  return (
    <div className=" flex-1 flex justify-between">
       
      <div className="mx-2">
        <p className=" text-gray-100"> {activeMenu ? activeMenu.title : "Dashboard"}</p>
        <p>{activeMenu ? activeMenu.title : "Dashboard"}</p>
      </div>
        
      <div className="flex gap-2">
        <p>Search</p>
        <p>Notifications</p>
        <p>Profile name</p>
      </div>
    </div>
  );
};

export default NavBar;
