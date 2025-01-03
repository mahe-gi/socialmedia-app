import React from "react";
import Image from "next/image";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { IoHeartOutline } from "react-icons/io5";
import { MdIosShare } from "react-icons/md";

const FeedCard: React.FC = () => {
  return (
    <div>
      <div className=" grid grid-cols-12  p-4 border-t-2 dark:border-t-gray-800 ">
        <div className="col-span-1 cursor-pointer">
          <Image
            src="/profile.jpeg"
            alt="user"
            width={50}
            height={50}
            className=" h-10 w-10 rounded-full"
          />
        </div>
        <div className=" col-span-11 px-2  ">
          <h5 className="cursor-pointer">mahesh</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            enim? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Explicabo, ducimus.
          </p>
          <div className="flex items-center justify-between px-10 mt-2 cursor-pointer ">
            <div>
              <FaRegComment />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <IoHeartOutline />
            </div>
            <div>
              <MdIosShare />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
