import { useState, useEffect } from "react";
import { USER } from "../../api/apiUrl";
import request from "../../api/apiService";

import mainstacklogo from "../../assets/mainstack-logo.svg";
import home from "../../assets/home.svg";
import analytics from "../../assets/analytics.svg";
import revenue from "../../assets/revenue.svg";
import apps from "../../assets/apps.svg";
import appsWhite from "../../assets/apps-white.svg";
import down from "../../assets/down-white.svg";
import crm from "../../assets/crm.svg";
import notification from "../../assets/notification.svg";
import chat from "../../assets/chat.svg";
import menu from "../../assets/menu.svg";
import link from "../../assets/link-icon.svg";
import store from "../../assets/store-icon.svg";
import booking from "../../assets/booking.svg";
import mediakit from "../../assets/media-kit-icon.svg";
import invoice from "../../assets/invoicing-icon.svg";
import settings from "../../assets/account-settings.svg";
import receipt from "../../assets/reciept-icon.svg";
import refer from "../../assets/refer-icon.svg";
import bug from "../../assets/bug-icon.svg";
import switchIcon from "../../assets/switch-account.svg";
import signout from "../../assets/signout-icon.svg";
import { MdOutlineChevronRight } from "react-icons/md";
function Navbar() {
  const [menuAppButton, setMenuAppButton] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [user, setUser] = useState([]);

  const getUser = async () => {
    try {
      const response = await request(USER);
      const result = await response.json();
      if (response.status === 200) {
        setUser(result);
      }
    } catch (error) {
      //
    }
  };

  function getInitials(firstName, lastName) {
    const firstInitial = firstName ? firstName[0].toUpperCase() : "";
    const lastInitial = lastName ? lastName[0].toUpperCase() : "";
    return firstInitial + lastInitial;
  }

  useEffect(() => {
    getUser();
  }, []);

  const navDropDownItems = [
    {
      icon: link,
      title: "Link in Bio",
      description: "Manage your Link in Bio",
    },
    {
      icon: store,
      title: "Store",
      description: "Manage your Store activities",
    },
    {
      icon: mediakit,
      title: "Media Kit",
      description: "Manage your Media Kit",
    },
    {
      icon: invoice,
      title: "Invoicing",
      description: "Manage your Invoices",
    },
    {
      icon: booking,
      title: "Bookings",
      description: "Manage your Bookings",
    },
  ];

  const navDropDownItems2 = [
    {
      icon: settings,
      text: "Settings",
    },
    {
      icon: receipt,
      text: "Purchase History",
    },
    {
      icon: refer,
      text: "Refer and Earn",
    },

    {
      icon: apps,
      text: "Integrations",
    },
    {
      icon: bug,
      text: "Report Bug",
    },
    {
      icon: switchIcon,
      text: "Switch Account",
    },
    {
      icon: signout,
      text: "Sign Out",
    },
  ];

  return (
    <main className="flex justify-between shadow-md w-full rounded-[100px] px-6 py-[14px] text-[#56616B] font-semibold z-50">
      <div>
        <img src={mainstacklogo} alt="mainstack logo" />
      </div>
      <ul className="flex">
        <li className="flex justify-center items-center px-[18px] mx-[10px] cursor-pointer hover:bg-[#EFF1F6] rounded-[100px]">
          <img src={home} className="pr-1" />
          Home
        </li>
        <li className="flex justify-center items-center px-[18px] mx-[10px] cursor-pointer hover:bg-[#EFF1F6] rounded-[100px]">
          <img src={analytics} className="pr-1" />
          Analytics
        </li>
        <li className="flex justify-center items-center px-[18px] bg-[#131316] rounded-[100px] text-white py-2 mx-[10px] cursor-pointer">
          <img src={revenue} className="pr-1" />
          Revenue
        </li>
        <li className="flex justify-center items-center px-[18px] mx-[10px] cursor-pointer hover:bg-[#EFF1F6] rounded-[100px]">
          <img src={crm} className="pr-1" />
          CRM
        </li>

        {!menuAppButton && (
          <li
            className="flex justify-center items-center px-[18px] mx-[10px] cursor-pointer hover:bg-[#EFF1F6] rounded-[100px]"
            onClick={() => [setMenuAppButton(true), setHamburgerMenu(false)]}
          >
            <img src={apps} className="pr-1" />
            Apps
          </li>
        )}

        {menuAppButton && (
          <li
            className="flex justify-center items-center px-[18px] mx-[10px] cursor-pointer rounded-[100px] bg-black text-white"
            onClick={() => [setMenuAppButton(false), setHamburgerMenu(false)]}
          >
            <div className="flex justify-between items-center">
              <div className="flex mr-2">
                <img src={appsWhite} className="pr-1" />
                Apps
              </div>
              <div className="flex ml-2">
                Link in Bio
                <img src={down} className="pr-1" />
              </div>
            </div>
          </li>
        )}
        {/* dropdown meny */}
        {menuAppButton && (
          <div className="shadow-md min-w-[400px] min-h-[400px] absolute right-[150px] top-[105px] bg-white rounded-2xl flex flex-col py-2  justify-center items-center">
            {navDropDownItems.map((item) => (
              <div
                className="hover:shadow rounded-2xl flex justify-between items-center w-[90%] p-[15px] my-1 cursor-pointer"
                key={item.id}
              >
                <div className="flex">
                  <div className="grid place-items-center rounded-xl shadow mr-4">
                    <img src={item.icon} alt="link" className="p-3" />
                  </div>

                  <div className="flex flex-col justify-start items-start">
                    <div className="text-[#131316]">{item.title}</div>
                    <div className="font-normal">{item.description}</div>
                  </div>
                </div>

                <MdOutlineChevronRight className="text-[#131316] w-4 h-4 font-normal hover:block hidden" />
              </div>
            ))}
          </div>
        )}
      </ul>
      <ul className="flex">
        <li className="flex justify-center items-center cursor-pointer">
          <img src={notification} />
        </li>{" "}
        <li className="flex justify-center items-center mx-[18px] cursor-pointer">
          <img src={chat} />
        </li>{" "}
        <li className="flex justify-center items-center cursor-pointer">
          <div
            className="flex justify-center items-center bg-[#EFF1F6] pl-[5px] pr-3 rounded-[100px] py-1"
            onClick={() => [
              setHamburgerMenu(!hamburgerMenu),
              setMenuAppButton(false),
            ]}
          >
            <div className="text-white bg-black rounded-full w-8 h-8 grid place-items-center ">
              {getInitials(user?.first_name, user?.last_name)}
            </div>
            <img src={menu} />
          </div>
          {/* hamburger menu */}
          {hamburgerMenu && (
            <>
              <div className="shadow fixed rounded-2xl flex flex-col justify-start items-start min-w-[350px] p-3 my-1 cursor-pointer top-[105px] right-[50px] z-[9000] bg-white">
                <div className="flex items-center mb-4">
                  <div className="text-white bg-black rounded-full w-8 h-8 grid place-items-center m-3">
                    {getInitials(user?.first_name, user?.last_name)}
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <div className="text-[#131316] text-lg">
                      {`${user?.first_name} ${user?.last_name}` ??
                        "Olivier Jonesx"}
                    </div>
                    <div className="font-normal text-sm">
                      {user?.email ?? "olivierjones@gmail.com"}
                    </div>
                  </div>
                </div>

                {navDropDownItems2.map((item) => (
                  <>
                    <div
                      className="rounded-2xl flex justify-between items-center py-1 cursor-pointer"
                      key={item.id}
                    >
                      <img src={item.icon} alt="link" className="p-3" />
                      <div className="text-[#131316]">{item.text}</div>
                    </div>
                  </>
                ))}
              </div>
            </>
          )}
        </li>
      </ul>
    </main>
  );
}

export default Navbar;
