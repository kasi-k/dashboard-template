import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { AiTwotoneDashboard } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import Headers from "./Headers";

const Layout = () => {
  const location = useLocation();
  const Menus = [
    { title: "Dashboard", icon: <AiTwotoneDashboard />, to: "/dashboard" },
    { title: "Online Enquiry", icon: "", to: "/online-enquiry" },
    { title: "Courses", icon: "", to: "/r" },
    { title: "Generate course", icon: "", to: "/e" },
    { title: "Subscriptions", icon: "", to: "/a" },
    { title: "Users", icon: "", to: "/b" },
    { title: "Team", icon: "", to: "b" },
    { title: "Help & Support", icon: "", to: "c" },
    { title: "Reports", icon: "", to: "l" },
    { title: "Settings", icon: <IoIosSettings />, to: "e" },
    { title: "Policy", icon: "", to: "a" },
    { title: "FAQ", icon: "", to: "v" },
    { title: "Logout", icon: "", to: "#" },
  ].filter(Boolean);

  return (
    <div className="flex dark:bg-black bg-blue-400 lg:p-6 md:p-6 w-full h-screen  ">
      {/* Sidebar */}
      <div className=" dark:bg-black dark:text-white bg-white text-black rounded-xl h-fit text-nowrap lg:w-2/12 md:w-3/12 lg:block md:block hidden ">
        <div className="flex justify-center my-4">
          <p className="text-xl font-bold">Logo</p>
        </div>

        <div className="my-2 ">
          <ul className="pt-3">
            {Menus.map((menu, index) => (
              <React.Fragment key={index}>
                <NavLink to={menu.to} onClick={menu.onClick}>
                  <li
                    className={`cursor-pointer text-md flex items-center space-y-4   p-2 mt-1 pl-3 transition-all duration-700 hover:bg-orange-600 hover:font-semibold font-extralight ${
                      location.pathname && location.pathname.startsWith(menu.to)
                        ? "bg-orange-600 font-semibold transition-all duration-500"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-x-2">
                      {menu.icon}
                      <span
                        className={`font-poppins text-lg flex-1 duration-3 `}
                      >
                        {menu.title}
                      </span>
                    </div>
                  </li>
                </NavLink>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-2">
        {/* Header */}
        <Headers Menus={Menus} />

        {/* Content Area */}
        <div className="flex-1 p-4 overflow-y-auto">
          {/* Outlet for nested routes */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
