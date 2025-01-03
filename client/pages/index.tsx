import React from "react";
import { FaXTwitter } from "react-icons/fa6";

import FeedCard from "@/components/FeedCard";
import { IoSearch } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { BsPerson } from "react-icons/bs";
import { BiHomeAlt2 } from "react-icons/bi";

interface sidebarButtons {
  title: string;
  icon: React.ReactNode;
}

const sideBarMenuitems: sidebarButtons[] = [
  {
    title: "Home",
    icon: <BiHomeAlt2 />,
  },
  {
    title: "Explore ",
    icon: <IoSearch />,
  },
  {
    title: "Notification",
    icon: <IoMdNotifications />,
  },
  {
    title: "Messages",
    icon: <MdOutlineMail />,
  },
  {
    title: "Communities",
    icon: <FaUserGroup />,
  },
  {
    title: "Profile",
    icon: <BsPerson />,
  },
];

export default function Home() {
  return (
    <div>
      <div className=" grid grid-cols-12 h-screen w-screen ">
        <div className=" col-span-3 border-r-[0.5px] border-r-slate-200 dark:border-gray-800 flex overflow-hidden ">
          <div className=" px-24 pt-1 ">
            <div className=" text-[30px] rounded-full w-fit p-[10px] hover:bg-gray-50 dark:hover:bg-gray-900  transition-all cursor-pointer">
              <FaXTwitter />
            </div>
            <div>
              <ul className=" mt-2 text-[19px] font-medium">
                {sideBarMenuitems.map((item) => (
                  <li
                    key={item.title}
                    className=" flex justify-start  items-center gap-3 px-4 py-3 mt-[6px] pr-2 rounded-full hover:bg-gray-50 dark:hover:bg-gray-900  transition-all cursor-pointer">
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
              <button className=" mt-4 px-[90px] py-[14px] w-fit bg-white text-black rounded-full font-bold">
                Post
              </button>
            </div>
          </div>
        </div>
        <div className=" col-span-5 border-r-[0.5px] border-r-slate-200 dark:border-r-gray-800 h-screen scro overflow-scroll">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className=" col-span-4"></div>
      </div>
    </div>
  );
}
