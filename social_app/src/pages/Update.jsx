import axios from "axios";
import React, { useState } from "react";
import instance from "../../app/instance";

const Update = () => {
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [header, setHeader] = useState("");
  const [aboutDesc, setAboutDesc] = useState("");
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState("");

  const HandleSubmit = (e) => {
    console.log("clicked");
    const data = new FormData();
    data.append("file", img1);
    data.append("upload_preset", "z46xgfxs");
    data.append("cloud_name", "dlabwmroq");
    fetch(" https://api.cloudinary.com/v1_1/dlabwmroq/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        const img1 = data.url;

        axios
          .post(
            "http://localhost:5000/post",
            {
              img1,
              header,
              aboutDesc,
              mobile,
              email,
            },
            {
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }
          )
          .then((res) => console.log(res));
      });
  };
  return (
    <div className="w-full h-screen  bg-gradient-to-r  from-[#232197] via-[#232197] to-[#E85BFF] flex items-center">
      <div className="w-[1300px] h-[600px]  mx-auto bg-white flex flex-col items-center">
        <h1 className="text-3xl font-semibold mt-12">Edit</h1>
        <form className="mt-10 flex flex-col ">
          <input
            type="file"
            onChange={(e) => {
              setImg1(e.target.files[0]);
            }}
          />
          <input
            type="file"
            onChange={(e) => {
              setImg2(e.target.files[0]);
            }}
          />
          <h1>enter heading</h1>
          <input
            className="border-black border-2"
            type="text"
            value={header}
            onChange={(e) => {
              setHeader(e.target.value);
            }}
          />
          <h1>enter email</h1>
          <input
            className="border-black border-2"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h1>enter mobile</h1>
          <input
            className="border-black border-2"
            type="number"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
          <h1>about</h1>
          <textarea
            value={aboutDesc}
            className="border-black border-2 mt-2"
            cols="10"
            rows="8"
            onChange={(e) => {
              setAboutDesc(e.target.value);
            }}
          ></textarea>
          <button
            onClick={HandleSubmit}
            className="bg-black text-white mt-10 w-32 h-8 rounded-lg"
            type="button"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
