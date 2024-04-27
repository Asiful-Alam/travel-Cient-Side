import { Link, NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const links = (
    <>
      <li>
        <NavLink
          className="border-2 bg-transparent"
          activeClassName="text-blue-500 border-blue-500"
          to="/"
          isActive={(match, location) => {
            if (!match) {
              return false;
            }
            return true;
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="border-2 bg-transparent"
          activeClassName="text-red-500 border-red-500"
          to="/tourists-spot"
          isActive={(match, location) => {
            if (!match) {
              return false;
            }
            return true;
          }}
        >
          Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          className="border-2 bg-transparent"
          activeClassName="text-yellow-500 border-yellow-500"
          to="/location"
          isActive={(match, location) => {
            if (!match) {
              return false;
            }
            return true;
          }}
        >
          Add Tourist Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          className="border-2 bg-transparent"
          activeClassName="text-yellow-500 border-t-orange-500"
          to="/my-list"
          isActive={(match, location) => {
            if (!match) {
              return false;
            }
            return true;
          }}
        >
          My List
        </NavLink>
      </li>
      <li>
        <NavLink
          className="border-2 bg-transparent"
          activeClassName="text-yellow-500 border-green-500"
          to="/bookings"
          isActive={(match, location) => {
            if (!match) {
              return false;
            }
            return true;
          }}
        >
          Bookings
        </NavLink>
      </li>
      <li>
        <NavLink
          className="border-2 bg-transparent"
          activeClassName="text-yellow-500 border-green-500"
          to="/about-us"
          isActive={(match, location) => {
            if (!match) {
              return false;
            }
            return true;
          }}
        >
          About us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar my-8">
      <div className="navbar-start">
        <h1 className="font-bold text-3xl">Asif<span className="text-red-500"> Travel</span></h1>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-base font-semibold gap-2 px-4">{links}</ul>
      </div>
      <Link to="/login" className="navbar-end space-x-4">

        <button className="btn text-white bg-purple-500">Login</button>
      </Link>
    </div>
  );
};

export default NavBar;
