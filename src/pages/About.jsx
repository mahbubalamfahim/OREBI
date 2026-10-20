import React from "react";
import Container from "../components/Container";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Image from "../components/Image";
import aboutOne from "../assets/aboutOne.png";
import aboutTwo from "../assets/aboutTwo.png";
import Button from "../components/Button";


const About = () => {
  return (
    <>
      <Container>
        <h3 className="text-[49px] text-[#262626] font-bold font-dm pt-31 pb-2.75">
          About
        </h3>
        <h3 className="text-[12px] text-[#767676] font-dm pb-34 flex items-center">
          <Link to={"/"}>Home</Link> <MdKeyboardArrowRight />
          <Link to={"/about"}>About</Link>
        </h3>
        <div className="flex items-center gap-x-10 pb-32">
          <div className="w-[50%] relative">
            <Image imgSrc={aboutOne} />
            <Button
              btnName={"Our Brands"}
              className={
                "text-[16px] text-white bg-black px-24.25 py-7 absolute bottom-8 left-1/2 -translate-x-1/2"
              }
            />
          </div>
          <div className="w-[50%] relative">
            <Image imgSrc={aboutTwo} />
            <Button
              btnName={"Our Brands"}
              className={
                "text-[16px] text-white bg-black px-24.25 py-7 absolute bottom-8 left-1/2 -translate-x-1/2"
              }
            />
          </div>
        </div>
        <h3 className="text-[39px] text-[#262626] font-dm pb-29.5">
          Orebi is one of the world’s leading ecommerce brands and is
          internationally recognized for celebrating the essence of classic
          Worldwide cool looking style.
        </h3>
        <div className="flex pb-32.75 gap-x-10">
          <div className="w-1/3">
            <h3 className="text-[25px] text-[#262626] font-bold font-dm pb-2.75">
              Our Vision
            </h3>
            <h4 className="text-[16px] text-[#767676] font-dm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an printer took a galley of type and
              scrambled it to make a type specimen book.
            </h4>
          </div>
          <div className="w-1/3">
            <h3 className="text-[25px] text-[#262626] font-bold font-dm pb-2.75">
              Our Story
            </h3>
            <h4 className="text-[16px] text-[#767676] font-dm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic.
            </h4>
          </div>
          <div className="w-1/3">
            <h3 className="text-[25px] text-[#262626] font-bold font-dm pb-2.75">
              Our Brands
            </h3>
            <h4 className="text-[16px] text-[#767676] font-dm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.
            </h4>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
