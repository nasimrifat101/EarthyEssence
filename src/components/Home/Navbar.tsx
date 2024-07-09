import { FaCartFlatbed } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { LuHeartPulse } from "react-icons/lu";
import getNavLinkClassName from "../../utils/NavlinkStyle";
import Search from "./Search";
import ScrollPositionNav from "../../utils/ScrollPositionNav";

const Navbar = () => {
  const scrollPosition = ScrollPositionNav();
  const navlinks = (
    <>
      <li>
        <NavLink to={"/"} className={getNavLinkClassName}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/products"} className={getNavLinkClassName}>
          Plants
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="relative min-w-full">
      <div
        className={`fixed w-full top-0 z-50 ${
          scrollPosition > 20 ? "backdrop-blur-md bg-white/30" : ""
        }`}
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navlinks}
              </ul>
            </div>
            <a className="btn btn-ghost text-2xl font-bold">EarthyEssence</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl">{navlinks}</ul>
          </div>
          <div className="navbar-end space-x-2">
            <Search />
            <NavLink to="/bookmarks" className="btn text-xl">
              <LuHeartPulse />
            </NavLink>
            <NavLink to="/cart" className="btn text-xl">
              <FaCartFlatbed />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
