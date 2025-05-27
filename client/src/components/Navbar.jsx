import { FileText, LogOut, Menu, PlusCircle } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router";
import AuthStore from "../hooks/useAuthStore";

const Navbar = () => {

  const {AuthUser} = AuthStore();
  console.log("AuthUser", AuthUser);
  

  
  const UserLogin = true;
  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Menu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-bold" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-blog"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-bold" : ""
                }
              >
                All Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to='/' className="text-xl font-bold">BlogApp</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-blog"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : ""
              }
            >
              All Blog
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {AuthUser ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/create-blog"
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2 rounded-md transition duration-200 hover:bg-primary hover:text-white ${
                      isActive ? "text-blue-600 font-bold" : ""
                    }`
                  }
                >
                  <PlusCircle size={18} /> Create Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-blog"
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2 rounded-md transition duration-200 hover:bg-primary hover:text-white ${
                      isActive ? "text-blue-600 font-bold" : ""
                    }`
                  }
                >
                  <FileText size={18} /> My Blogs
                </NavLink>
              </li>
              <li>
                <a className="flex items-center gap-2 p-2 rounded-md hover:bg-error hover:text-white transition duration-200">
                  <LogOut size={18} /> Logout
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/sign-in" className="btn">
            SignIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
