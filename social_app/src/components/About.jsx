import React from "react";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
const About = ({ data }) => {
  return (
    <div className="bg-gradient-to-r w-full h-[843.62px] from-[#232197] via-[#232197] to-[#E85BFF] ">
      <div className="grid grid-cols-2">
        <div>
          <div className="text-[#FFBD3E] font-normal text-[80px] mx-20 pt-24">
            About us
          </div>
          <h1 className="text-white px-20 mt-6 w-28 overflow-hidden ">
            {data.aboutDesc}
          </h1>
          <h1 className="text-[#FFBD3E] px-20 mt-12 text-3xl font-medium">
            Reach us
          </h1>
          <div className="mx-20 mt-10 flex  items-center">
            <BsFillTelephoneInboundFill className="text-white" />
            <div className="mx-4 text-white font-thin">{data.mobile}</div>
          </div>
        </div>
        <div className="h-[628.36px] w-[600.14px] border-red-300 border-2 rounded-[250px] mt-10 flex items-center justify-center">
          <div
            style={{ backgroundImage: "url(/street.jpg)" }}
            className="bg-cover bg-no-repeat h-[543.36px] w-[520.14px] rounded-[250px]"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default About;
