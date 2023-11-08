import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SideIcons = ({ name, link }) => {
  return (
    <NavLink
      className="w-[90%] mb-5 h-[3rem]  flex items-center rounded-sm hover:bg-gray-200 hover:text-black "
      to={link}
    >
      <div className="pl-5">{name}</div>
    </NavLink>
  );
};

export default SideIcons;
