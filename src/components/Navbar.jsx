import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "News", path: "/news" },
    { name: "Business", path: "/business" },
    { name: "Sport", path: "/sport" },
    { name: "Science", path: "/science" },
    { name: "Politics", path: "/politics" },
    { name: "Entertainment", path: "/entertainment" },
  ];

  return (
    <div>
      <nav className="w-full flex flex-wrap items-center justify-around py-4   border-b">
        <ul className="flex gap-6 items-center justify-center w-full text-base font-semibold font-Inter text-gray-600 transition-all duration-200">
          {links.map((link) => (
            <li key={link.name} className="hover:text-gray-900">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-slate-900 font-bold flex items-center justify-center gap-1 underline underline-offset-4   "
                    : "flex items-center justify-center gap-1 text-gray-600  "
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
