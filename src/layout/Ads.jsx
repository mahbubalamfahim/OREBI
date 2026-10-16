import React from "react";
import Image from "../components/Image";
import adsOne from "../assets/Ad_1.jpg";
import adsTwo from "../assets/Ad_2.png";
import adsThree from "../assets/Ad_3.jpg";
import Container from "../components/Container";
import { Link } from "react-router-dom";

const Ads = () => {
  return (
    <>
      <Container className="flex items-center justify-between py-35">
        <div className="w-[48%] ">
            <Link to={"/shop"}><Image imgSrc={adsOne} /></Link>
        </div>
        <div className="w-[48%] flex flex-col gap-y-7">
          <Link to={"/shop"}><Image imgSrc={adsTwo} /></Link>
          <Link to={"/shop"}><Image imgSrc={adsThree} /></Link>
        </div>
      </Container>
    </>
  );
};

export default Ads;
