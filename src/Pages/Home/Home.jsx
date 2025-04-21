import React, { useState } from "react";
import "./Home.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";
const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);
  return (
    <>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      ></Sidebar>
      <div className={`container ${sidebar ? "" : "large-contailer"}`}>
        <Feed category={category} />
      </div>
    </>
  );
};

export default Home;
