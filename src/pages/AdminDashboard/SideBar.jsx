import SideIcons from "./SideIcons";
import { useSelector } from "react-redux";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaQuoteLeft } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { BiLeftArrowCircle, BiLogOut } from "react-icons/bi";
import { BiRightArrowCircle } from "react-icons/bi";
import { useState } from "react";

const SideBar = () => {
  const usetId = useSelector((state) => state.auth.userId);
  const [show, toggleShow] = useState(true);
  const sideIcons = [
    {
      name: "Dashboard",
      link: "",
      icon: <LuLayoutDashboard />,
    },
    {
      name: "Food Routine",
      link: "food-routine",
      icon: <FaQuoteLeft />,
    },
    {
      name: "Location",
      link: "location",
      icon: <MdCategory />,
    },
    {
      name: "Rules",
      link: "rules",
      icon: <MdCategory />,
    },
    {
      name: "Hostel Images",
      link: "hostel-images",
      icon: <MdCategory />,
    },
    {
      name: "Settings",
      link: "settings",
      icon: <FiSettings />,
    },
  ];
  const handleBurger = () => {
    show ? toggleShow(false) : toggleShow(true);
  };

  return (
    <div>
      <div
        className={`md:w-[20rem] h-[50rem] top-[4.4rem] left-0 fixed bg-[#3140b6] text-white flex items-center flex-col w-[10rem] ease-in-out duration-300 ${
          !show && "left-[-10rem] "
        } `}
      >
        <div className="mt-10 md:text-3xl font-semibold text-[1.4rem]">
          DashBoard
        </div>

        <div className="mt-10 w-full flex flex-col items-center ">
          {sideIcons &&
            sideIcons.map((e) => {
              return (
                <SideIcons
                  name={e.name}
                  link={`/${usetId}/${e.link}`}
                  icon={e.icon}
                  key={e.name}
                />
              );
            })}

          <button className={`w-[100%] pl-5 mb-5 h-[3rem] `}>
            <div
              className={`w-[90%] pl-2 md:pl-5 mb-5 h-[3rem] duration-150 flex items-center rounded-sm hover:bg-gray-200 hover:text-black hover:w-full`}
            >
              <BiLogOut />

              <div className=" pl-3 text-[.9rem] md:text-[1rem]">Logout</div>
            </div>
          </button>
        </div>
      </div>
      <div
        className={`fixed top-[7rem] left-[9rem] bg-[#3140b6] text-white p-1 text-[2rem] rounded-full md:hidden ease-in-out duration-300 ${
          !show && "left-[-1.3rem] "
        }`}
        onClick={handleBurger}
      >
        {!show ? <BiRightArrowCircle /> : <BiLeftArrowCircle />}
      </div>
    </div>
  );
};

export default SideBar;
