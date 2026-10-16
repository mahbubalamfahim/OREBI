import React from "react";
import Banner from "../components/Banner";
import { RiNumber2 } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";
import Container from "../components/Container";
import { SlReload } from "react-icons/sl";


const Home = () => {
  return (
    <>
      <Banner />
      <Container>
        <div className="flex items-center justify-between">
        <div className="1/3 flex items-center gap-x-4">
        <RiNumber2 />
        <h3 className="font-dm text-4 text-[#6D6D6D]">Two years warranty</h3>
        </div>
        <div className="1/3 flex items-center gap-x-4">
        <FaTruck />
        <h3 className="font-dm text-4 text-[#6D6D6D]">Free Shipping</h3>
        </div>
        <div className="1/3 flex items-center gap-x-4">
        <SlReload />
        <h3 className="font-dm text-4 text-[#6D6D6D]">Return policy in 30 days</h3>
        </div>
      </div>
      </Container>
    </>
  );
};

export default Home;
