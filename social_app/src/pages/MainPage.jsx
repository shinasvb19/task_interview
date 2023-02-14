import React, { useEffect, useState } from "react";
import instance from "../../app/instance";
import About from "../components/About";
import MainHeader from "../components/MainHeader";

const MainPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    instance.get("/post").then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div>
      <MainHeader data={data} />
      <About data={data} />
    </div>
  );
};

export default MainPage;
