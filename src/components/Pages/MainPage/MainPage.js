import React from "react";
import "./MainPage.css";
import { TbCurrentLocation } from "react-icons/tb";
import { BiCategory } from "react-icons/bi";
import { BiDollarCircle } from "react-icons/bi";
import pataIcon from "../../../Canabis resources/Vector (14).png";
import cultivation from "../../../Canabis resources/Vector (15).png";
import CartPage from "./CartPage";
import Carts from "./Carts/Carts";
const MainPage = () => {
  return (
    <div className="bg-gray-100 p-[19px] max-w-[1117px]">
      <div>
        <h1 className="text-xl font-bold">Auction</h1>
      </div>
      <p className="font-semibold text-sm">
        Explore and bid on your desired product based on several filters
      </p>

      <div className="flex gap-3" >
      <div className="location  Bar mt-[25px] bg-white">
        <div className="flex gap-2 pl-[32px] pt-[31px] items-center ">
          <p>Location</p>
          <TbCurrentLocation></TbCurrentLocation>
        </div>
        <hr className="ml-[14px] mr-[14px]" />

        <p className="text-center pt-[15.26px]">
          <select className=" border border-gray-300 text-sm pr-[140px] pl-[12px] pt-[5px] pb-[5px] ">
            <option disabled selected>
              <span className="text-sm pr-[140px]">Tulsa</span>
            </option>
            <option>
              <span>Tulsa</span>
            </option>
            <option></option>
          </select>

          <div>
            <div className="flex gap-2 pl-[32px] pt-[31px] items-center ">
              <p>Category</p>
              <BiCategory></BiCategory>
            </div>
            <hr className="ml-[14px] mr-[14px]" />

            <div className="form-control">
              <label className="cursor-pointer text-start  pl-[56px] pt-[14.5px]">
                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    checke
                    className="checkbox bg-green-400"
                  />
                  <span className=" text-green-400">All</span>
                </div>
                <div className="flex gap-3 pt-[18px]">
                  <input
                    type="checkbox"
                    checke
                    className="checkbox checkbox-gray-400"
                  />
                  <span className="text-gray-400">Flowers</span>
                </div>
                <div className="flex gap-3 pt-[18px]">
                  <input
                    type="checkbox"
                    checke
                    className="checkbox checkbox-gray-400"
                  />
                  <span className="text-gray-400">Trims</span>
                </div>
                <div className="flex gap-3 pt-[18px]">
                  <input
                    type="checkbox"
                    checke
                    className="checkbox checkbox-gray-400"
                  />
                  <span className="text-gray-400">Biomass</span>
                </div>
                <div className="flex  gap-3 pt-[18px]">
                  <input
                    type="checkbox"
                    checke
                    className="checkbox checkbox-gray-400"
                  />
                  <span className="text-gray-400">Oils</span>
                </div>
              </label>
            </div>
          </div>
        </p>

        <div className="flex gap-2 pl-[32px] pt-[31px] items-center ">
          <p>Price</p>
          <BiDollarCircle></BiDollarCircle>
        </div>
        <hr className="ml-[14px] mr-[14px]" />

        <input
          type="range"
          min="0"
          max="100"
          value="40"
          className="range range-success ml-[32px] mt-[45px] w-[200px] range-xs"
        />

        <div className="flex gap-2 pl-[32px] pt-[31px] items-center ">
          <p>Strain</p>
          <img src={pataIcon} alt="" />
        </div>
        <hr className="ml-[14px] mr-[14px]" />
        <div className="flex pt-[28.5px] pl-[15.5px] pr-[15.5px]">
          <p className="text-green-500 pt-[5px] pb-[5px] border border-green-500 pl-[16px] pr-[16px]">
            Indica
          </p>
          <p className="text-gray-500 pt-[5px] pb-[5px] border border-gray-500 pl-[16px] pr-[16px]">
            Indica
          </p>
          <p className="text-gray-500 pt-[5px] pb-[5px] border border-gray-500 pl-[16px] pr-[16px]">
            Indica
          </p>
        </div>

        <div>
        <div className="flex gap-2 pl-[32px] pt-[31px] items-center ">
          <p>Cultivation Type</p>
          <img src={cultivation} alt="" />
        </div>
        <hr className="ml-[14px] mr-[14px]" />
        <div className="flex pt-[28.5px] pl-[15.5px] pr-[15.5px]">
          <p className="text-green-500 pt-[5px] pb-[5px] border border-green-500 pl-[16px] pr-[16px]">
            All
          </p>
          <p className="text-gray-500 pt-[5px] pb-[5px] border border-gray-500 pl-[16px] pr-[16px]">
            Indoor
          </p>
          <p className="text-gray-500 pt-[5px] pb-[5px] border border-gray-500 pl-[16px] pr-[16px]">
            Outdoor
          </p>
        </div>
      </div>
      </div>
      <div className="">
     <Carts></Carts>
      </div>
      </div>
     
    </div>
  );
};

export default MainPage;
