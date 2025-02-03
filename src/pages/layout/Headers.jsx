import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
const Headers = ({ Menus }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className=" ">
      <p
        className="text-2xl md:hidden lg:hidden block"
        onClick={toggleDropdown}
      >
        <span className="flex items-center justify-center gap-2 text-black ">Menu</span>
      </p>

      {isDropdownOpen && (
        <div className="absolute right-0 top-9 w-full bg-white  shadow-md lg:hidden md:block block">
          <div className="flex gap-2 items-center pt-3 mx-3">
            <p>Profile</p>
          
          </div>
          <ul className="flex flex-wrap py-5 ">
            {Menus.map((menu, index) => (
              <NavLink to={menu.to} onClick={menu.onClick} key={index}>
                <li
                  className={`cursor-pointer text-md flex items-center gap-x-3 p-2 mt-1 pl-3 transition-all duration-700 ${
                    location.pathname === menu.to
                      ? "bg-orange-600 font-semibold transition-all duration-500"
                      : ""
                  }`}
                  onClick={toggleDropdown}
                >
                  <div className="flex items-center gap-x-6 px-2">
                    {menu.icon}
                    <span className="font-poppins text-lg flex-1 duration-300 whitespace-nowrap">
                      {menu.title}
                    </span>
                  </div>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      )}

      <div className="flex justify-between">
        <div className="mx-2">
          <p className=" text-gray-100">Main Dashboard</p>
          <p>Main Dashboard</p>
        </div>
        <div className="flex gap-2">
          <p>Search</p>
          <p>Notifications</p>
          <p>Profile name</p>
        </div>
      </div>
    </div>
  );
};

export default Headers;
