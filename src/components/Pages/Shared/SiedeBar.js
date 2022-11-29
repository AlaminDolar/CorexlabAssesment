import React from "react";
import { Outlet } from "react-router-dom";
import canabis from "../../../Canabis resources/Cannabis_Connector_1-removebg-preview 1.png";
import dashboard from "../../../Canabis resources/Vector.png";
import Auction from "../../../Canabis resources/Vector (1).png";
import marketplace from "../../../Canabis resources/Vector (2).png";
import orders from "../../../Canabis resources/Vector (3).png";
import events from "../../../Canabis resources/Vector (4).png";
import settings from "../../../Canabis resources/Vector (5).png";

import "./Sidebar.css";

const SiedeBar = () => {
  return (
    <div className="drawer translate-y-[-9px] drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <Outlet></Outlet>

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side w-[323px] ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <div className="grid  justify-items-center">
            <div className="mb-[11.97px]">
              <img src={canabis} className="canabis "></img>
            </div>
          </div>
          <div className="text-center ">
            <h1 className="Dispensary mb-[71px]">Dispensary</h1>
          </div>

          <li>
            <a href="">
              <div className="flex gap-2 ">
                <div>
                  <img src={dashboard} alt="" />
                </div>
                <div>
                  <p>Dashboard</p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="flex gap-2 ">
                <div>
                  <img src={Auction} alt="" />
                </div>
                <div>
                  <p>Auction</p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="flex gap-2 ">
                <div>
                  <img src={marketplace} alt="" />
                </div>
                <div>
                  <p>Marketplace</p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="flex gap-2 ">
                <div>
                  <img src={orders} alt="" />
                </div>
                <div>
                  <p>Orders</p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="flex gap-2 ">
                <div>
                  <img src={events} alt="" />
                </div>
                <div>
                  <p>Events</p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="flex gap-2 ">
                <div>
                  <img src={settings} alt="" />
                </div>
                <div>
                  <p>Settings</p>
                </div>
              </div>
            </a>
          </li>

          {/* <li><a>Sidebar Item 2</a></li> */}
        </ul>
      </div>
    </div>
  );
};

export default SiedeBar;
