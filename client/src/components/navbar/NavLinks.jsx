import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Report Issue",
    path: "/report",
  },
  {
    name: "Map",
    path: "/map",
  },
  {
    name: "Emergency",
    path: "/emergency",
  },
  {
    name: "Dashboard",
    path: "/dashboard",
  },
];

const NavLinks = ({ mobile = false }) => {
  return (
    <ul
      className={
        mobile
          ? "flex flex-col gap-5"
          : "flex items-center gap-8"
      }
    >
      {links.map((link) => (
        <li key={link.path}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-600"
            }
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;