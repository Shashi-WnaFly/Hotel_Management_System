import React from "react";
import { LOGO } from "../constant";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/login");
  }

  const handleHome = () => {
    navigate("/");
  }
  return (
    <div className="relative ">
      <div className="navbar bg-base-200 shadow-sm fixed top-0 z-20">
        <div className="flex-1">
          <a className="btn btn-ghost">
            <img alt="logo" className="w-22 md:w-30" src={LOGO} onClick={handleHome} />
          </a>
        </div>
        <div className="flex gap-2 z-20">
          <div className="dropdown dropdown-end md:mr-6">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="md:w-10 w-8 rounded-full">
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
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogOut}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
