import React from "react";

import { BsBell } from "react-icons/bs";
import { BsChatDots } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";
 import  avatar from '../../../Canabis resources/Ellipse 18 (2).png';

const header = () => {
  return (
    <div className="pl-[323px]  ">
      <div className="navbar bg-white ">
        <div className="flex-1">
          <p>
            <span>Auction</span> / All Auction
          </p>
        </div>

        <div className="flex-none">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="text-2xl">
                <BsBell></BsBell>
              </div>
            </label>
          </div>

          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="text-2xl">
                <BsChatDots></BsChatDots>
              </div>
            </label>
          </div>

          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="rounded-full">
                <img src={avatar} />
              </div>
            </label>
          </div>

          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="text-2xl">
                <RiLogoutBoxRLine></RiLogoutBoxRLine>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
