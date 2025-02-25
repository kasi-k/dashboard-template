import React from "react";
import { useLocation } from "react-router-dom";
import Toggle from "./Toggle";

const NavBar = ({Menus}) => {
    const location = useLocation();
    const activeMenu = Menus.find((menu) => menu.to === location.pathname);
  return (
    <div className=" flex-1 flex justify-between">
       
      <div className="mx-2">
        <p className=" text-gray-100"> {activeMenu ? activeMenu.title : ""}</p>
        <p>{activeMenu ? activeMenu.title : ""}</p>
      </div>
        
      <div className="flex gap-2 dark:text-white">
        <p>Search</p>
        <p>Notifications</p>
        <p>Profile name</p>
        <Toggle/>
      </div>
    </div>
  );
};

export default NavBar;
