import SideIcons from "./SideIcons";
import { useSelector } from "react-redux";

const SideBar = () => {
  const usetId = useSelector((state) => state.auth.userId);
  const sideIcons = [
    {
      name: "Dashboard",
      link: "dashboard",
    },
    {
      name: "Faqs",
      link: "faqs",
    },
    {
      name: "Category",
      link: "category",
    },
    {
      name: "Settings",
      link: "settings",
    },
    {
      name: "Logout",
      link: "logout",
    },
  ];
  return (
    <div className="w-[20rem] h-screen sticky top-0 left-0 bg-black text-white flex items-center flex-col">
      <div className="mt-10 text-3xl font-semibold">DashBoard</div>

      <div className="mt-10 w-full flex flex-col items-center">
        {sideIcons &&
          sideIcons.map((e) => {
            return (
              <SideIcons
                key={e.name}
                name={e.name}
                link={`${usetId}+${e.link}`}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SideBar;
