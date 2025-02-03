import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { AiTwotoneDashboard } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import Headers from "./Headers";

const Layout = () => {


  const Menus = [
    { title: "Dashboard", icon: <AiTwotoneDashboard />, to: "/dashboard" },
    { title: "Online Enquiry", icon: "", to: "" },
    { title: "Courses", icon: "", to: "" },
    { title: "Generate course", icon: "", to: "" },
    { title: "Subscriptions", icon: "", to: "" },
    { title: "Users", icon: "", to: "" },
    { title: "Team", icon: "", to: "" },
    { title: "Help & Support", icon: "", to: "" },
    { title: "Reports", icon: "", to: "" },
    { title: "Settings", icon:<IoIosSettings />, to: "" },
    { title: "Policy", icon: "", to: "" },
    { title: "FAQ", icon: "", to: "" },
    { title: "Logout", icon: "", to: "#" },
  ].filter(Boolean);



  return (
    <div className="flex bg-blue-400 lg:p-6 md:p-6 w-full h-screen overflow-auto">
      {/* Sidebar */}
      <div className=" bg-white text-black rounded-xl h-fit text-nowrap w-fit lg:block md:block hidden ">
        <div className="flex justify-center ">
          <p className="text-xl font-bold">Logo</p>
        </div>
        <div className="my-1">
          <ul className="pt-2">
            {Menus.map((menu, index) => (
              <React.Fragment key={index}>
                <NavLink to={menu.to} onClick={menu.onClick}>
                  <li
                    className={`cursor-pointer text-md flex items-center   p-2 mt-1 pl-3 transition-all duration-700 hover:bg-orange-600 hover:font-semibold font-extralight ${
                      location.pathname === menu.to
                        ? "bg-orange-600 font-semibold transition-all duration-500"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-x-2">
                      {menu.icon}
                      <span className={`font-poppins text-lg flex-1 duration-3`}>
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