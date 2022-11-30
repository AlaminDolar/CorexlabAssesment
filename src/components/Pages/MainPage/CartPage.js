import React from "react";
import canabis from "../../../Canabis resources/1.png";
import center from "../../../Canabis resources/middle.png";
import { AiOutlineCrown } from "react-icons/ai";
import Auction from "../../../Canabis resources/Vector (1).png";

const CartPage = ({cart}) => {
 
  return (
    <div className="cart h-[115px] w-[793px] mt-[25px] bg-white">
      <div className="grid grid-cols-6 divide-x ">
        <div className="flex col-span-2 ">
          <div>
            <img
              className="pt-[17px] pl-[18px] pb-[18px] pr-[13px]"
              src={cart.image}
              alt=""
            />
          </div>
          <div className="grid  items-center ">
            <span className="text ">
              {cart.heading1} <br />
              {cart.heading}
            </span>
          </div>
        </div>

        <div className="grid items-center ">
          <div>
            <img
              className="pt-[17px] pl-[18px] pb-[18px] pr-[13px]"
              src={cart.progressImg}
              alt=""
            />
          </div>
        </div>

        <div className="grid justify-center items-center">
          <p className="text-xl font-bold">
            <span className="font-normal text-sm">{cart.amountText}</span>
            <br />
           {cart.price}
          </p>
        </div>

        <div className="flex gap-1 justify-center items-center">
          <img src={cart.clmn4} alt="" />
        </div>


        <div className="grid items-center  ">
          <div className="flex gap-1 m-2 pl-[43px] pb-[6px] pt-[6px] pr-[26px] bg-green-600 rounded">
            <img src={Auction} alt="" />
            <p>Bid</p>
          </div>
          <div className="flex gap-1 m-2 pl-[43px] pb-[6px] pt-[6px] pr-[26px] border-lime-500 border rounded">
            <p className="text-lime-500">View</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
