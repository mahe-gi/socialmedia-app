import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface sidebarButtons {
  title: string;
  icon: React.ReactNode;
}

const sideBarMenuitems: sidebarButtons[] = [
  {
    title: "Home",
    icon: <FaXTwitter />,
  },
  {
    title: "Explore ",
    icon: <FaXTwitter />,
  },
  {
    title: "Notification",
    icon: <FaXTwitter />,
  },
  {
    title: "Messages",
    icon: <FaXTwitter />,
  },
  {
    title: "Communities",
    icon: <FaXTwitter />,
  },
  {
    title: "Profile",
    icon: <FaXTwitter />,
  },
];

export default function Home() {
  return (
    <div className={inter.className}>
      <div className=" grid grid-cols-12 h-screen w-screen ">
        <div className=" col-span-3 border-r-[0.5px] border-r-slate-200 flex">
          <div className=" px-24 pt-1">
            <div className=" text-[30px] rounded-full w-fit p-[10px] hover:bg-gray-50 dark:hover:bg-gray-900  transition-all cursor-pointer">
              <FaXTwitter />
            </div>
            <div>
              <ul className=" mt-2 text-[19px] font-medium">
                {sideBarMenuitems.map((item) => (
                  <li className=" flex justify-start  items-center gap-3 px-4 py-3 mt-[6px] pr-2 rounded-full hover:bg-gray-50 dark:hover:bg-gray-900  transition-all cursor-pointer">
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
        <div className=" col-span-5 border-r-[0.5px] border-r-slate-200"></div>
        <div className=" col-span-4"></div>
      </div>
    </div>
  );
}
