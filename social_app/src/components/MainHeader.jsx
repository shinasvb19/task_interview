import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import instance from "../../app/instance";
const MainHeader = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/update");
  };

  console.log(data);
  return (
    <div className="grid grid-cols-2 relative">
      <div className="bg-gradient-to-r from-[#232197] to-[#E85BFF] h-[968.37px]">
        <div className="w-28 h-28 border-2 border-white mx-20 mt-24">
          <div className="text-3xl text-white mx-6 my-3">L O </div>
          <div className="text-3xl text-white mx-6 my-3">G O</div>
        </div>
        <div className="text-white mx-20 my-10">mega shipment</div>
        <div className="text-white w-[90%] font-medium text-[93px] font-serif  mx-20">
          {data.header}
        </div>
        <div className="flex justify-start">
          <Button
            button={"w-48 h-14 bg-black mx-20 text-white text-lg mt-20"}
            buttonName={"update data"}
            submit={handleClick}
          />
          <Button
            button={
              "w-48 h-14 border-white border-2 hover:bg-black text-white text-lg mt-20"
            }
            buttonName={"Message"}
          />
        </div>
        <div className="w-[873.33px] h-[182.52px] bg-white z-10 absolute mt-8  bg-opacity-30 rounded-br-[100px]">
          <div className="w-full h-full text-white grid grid-cols-2 mx-20 mt-8">
            <div>
              <h1 className="text-2xl font-semibold">65000</h1>
              <p>followers</p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">650</h1>
              <p>post</p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${data.img1})` }}
        className="bg-cover bg-no-repeat"
      >
        <div className="w-[743.11px] h-[148.36px] right-0 z-20 bg-gradient-to-r to-[#232197] from-[#E85BFF] absolute bottom-16 rounded-l-3xl text-white py-[40px] px-8 text-3xl ">
          <div className="px-10">
            <span className="px-4 font-thin"> client</span>
            <span className="px-4 font-thin"> client</span>
            <span className="px-4 font-thin"> client</span>
            <span className="px-4 font-thin"> client</span>
            <span className="px-4 font-thin"> client</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
