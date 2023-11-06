import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

import { RiSettings4Line } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import { PiBowlFoodFill } from "react-icons/pi";
import { FcRules } from "react-icons/fc";
import { Link } from "react-router-dom";
import { BsFillBagDashFill } from "react-icons/bs";
import AddHostelRules from "../../pages/Admin/AddHostelsRules";

const AdminSidebar = () => {
  const menus = [
    { name: "AddHostelDetail", link: "/", icon: TbListDetails },
    { name: "AddHostelFoodRoutine", link: "/", icon: PiBowlFoodFill },
    { name: "AddHostelsRules", link: "/", icon: FcRules },
    { name: "Setting", link: "/", icon: RiSettings4Line },
    { name: "Logout", link: "/", icon: BsFillBagDashFill },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6 bg-white">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <BiMenu
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl text-gray-900 font-semibol">
        <AddHostelRules />
      </div>
    </section>
  );
};

export default AdminSidebar;
