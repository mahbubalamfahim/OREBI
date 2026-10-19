import React from "react";
import Container from "../components/Container";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Container>
        <span
          className="text-[200px] text-[#262626] font-bold font-dm pt-20 pb-12.5
    "
        >
          404
        </span>
        <h4 className="text-[16px] text-[#767676]  font-dm pb-12.5">
          The page you were looking for couldn't be found. The page could be
          removed or you <br /> misspelled the word while searching for it.
          Maybe try a search?
        </h4>
        <div className="w-[47%] pb-35 relative">
          <input
            type="text"
            placeholder="Type to search"
            className="text-[16px] text-[#767676]  font-dm pt-5.25 pb-5 pl-5.25  w-full border-black border"
          />
          <IoSearch className="absolute right-5 top-6.25" />
        </div>
        <Link to={"/"}>
          <button className="bg-black py-4 px-13  font-dm cursor-pointer">
            <h3 className="text-[16px] text-white text-center font-boldn ">
              Back to Home
            </h3>
          </button>
        </Link>
        <div className="pb-35"></div>
      </Container>
    </>
  );
};

export default Error;
