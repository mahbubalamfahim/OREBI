import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import Button from "../components/Button";
import { Square, SquareCheck } from "lucide-react";

const SignUP = () => {
  return (
    <>
      <Container>
        <h3 className="text-[49px] text-[#262626] font-bold font-dm pt-31 pb-2.75">
          Sign up
        </h3>
        <h3 className="text-[12px] text-[#767676] font-dm pb-31.25 flex items-center">
          <Link to={"/"}>Home</Link> <MdKeyboardArrowRight />
          <Link to={"/sign-up"}>Sign up</Link>
        </h3>
        <h3 className="text-[16px] text-[#767676] font-dm pb-30">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem <br /> Ipsum has been the industry's standard dummy
          text ever since the.
        </h3>
        <div className="accountOpen">
          <h3 className="text-[39px] text-[#262626] font-bold font-dm  pb-10.5">
            Your Personal Details
          </h3>
          <div className="flex items-center gap-x-10 pb-7.5">
            <div className="w-[20%]">
              <h4 className="text-[16px] text-[#262626] font-bold pb-2.5">
                First Name
              </h4>
              <input
                type="text"
                placeholder="First Name"
                className="text-[14px] text-[#767676] w-full border-b border-b-[#767676] outline-none pb-4"
              />
            </div>
            <div className="w-[20%]">
              <h4 className="text-[16px] text-[#262626] font-bold pb-2.5">
                Last Name
              </h4>
              <input
                type="text"
                placeholder="Last Name"
                className="text-[14px] text-[#767676] w-full border-b border-b-[#767676] outline-none pb-4"
              />
            </div>
          </div>
          <div className="flex items-center gap-x-10 pb-7.5">
            <div className="w-[20%]">
              <h4 className="text-[16px] text-[#262626] font-bold pb-2.5">
                Email address
              </h4>
              <input
                type="email"
                placeholder="company@domain.com"
                className="text-[14px] text-[#767676] w-full border-b border-b-[#767676] outline-none pb-4"
              />
            </div>
            <div className="w-[20%]">
              <h4 className="text-[16px] text-[#262626] font-bold pb-2.5">
                Telephone
              </h4>
              <input
                type="number"
                placeholder="Your phone number"
                className="text-[14px] text-[#767676] w-full border-b border-b-[#767676] outline-none pb-4"
              />
            </div>
          </div>
        </div>
        <div className="newCustomer pt-32.5 pb-35">
          <h3 className="text-[39px] text-[#262626] font-bold font-dm  pb-10.5">
            New Customer
          </h3>
          <div className="flex items-center gap-x-10 pb-7.5">
            <div className="w-[20%]">
              <h4 className="text-[16px] text-[#262626] font-bold pb-2.5">
                Address 1
              </h4>
              <input
                type="text"
                placeholder="4279 Zboncak Port Suite 6212"
                className="text-[14px] text-[#767676] w-full border-b border-b-[#767676] outline-none pb-4"
              />
            </div>
            <div className="w-[20%]">
              <h4 className="text-[16px] text-[#262626] font-bold pb-2.5">
                Address 2
              </h4>
              <input
                type="text"
                placeholder="----"
                className="text-[14px] text-[#767676] w-full border-b border-b-[#767676] outline-none pb-4"
              />
            </div>
          </div>
          <div className="flex items-center gap-x-10 pb-7.5">
            <div className="w-[20%]">
              <h4 className="text-[16px] text-[#262626] font-bold pb-2.5">
                City
              </h4>
              <input
                type="text"
                placeholder="Your city"
                className="text-[14px] text-[#767676] w-full border-b border-b-[#767676] outline-none pb-4"
              />
            </div>
            <div className="w-[20%]">
              <h4 className="text-[16px] text-[#262626] font-bold pb-2.5">
                Post Code
              </h4>
              <input
                type="text"
                placeholder="05228"
                className="text-[14px] text-[#767676] w-full border-b border-b-[#767676] outline-none pb-4"
              />
            </div>
          </div>
          <div className="flex items-center gap-x-10 pb-7.5">
            <div className="w-[20%]">
              <h4 className="text-[16px] text-[#262626] font-bold pb-2.5">
                Country
              </h4>
              <input
                type="country"
                placeholder="Please select"
                className="text-[14px] text-[#767676] w-full border-b border-b-[#767676] outline-none pb-4"
              />
            </div>
            <div className="w-[20%]">
              <h4 className="text-[16px] text-[#262626] font-bold pb-2.5">
                Region/State
              </h4>
              <input
                type="text"
                placeholder="Please select"
                className="text-[14px] text-[#767676] w-full border-b border-b-[#767676] outline-none pb-4"
              />
            </div>
          </div>
        </div>
        <div className="passwordPart">
          <h3 className="text-[39px] text-[#262626] font-bold font-dm  pb-10.5">
            Your Password
          </h3>
          <div className="flex items-center gap-x-10 pb-34">
            <div className="w-[20%]">
              <h4 className="text-[16px] text-[#262626] font-bold pb-2.5">
                Password
              </h4>
              <input
                type="password"
                placeholder="password"
                className="text-[14px] text-[#767676] w-full border-b border-b-[#767676] outline-none pb-4"
              />
            </div>
            <div className="w-[20%]">
              <h4 className="text-[16px] text-[#262626] font-bold pb-2.5">
                Repeat Password
              </h4>
              <input
                type="password"
                placeholder="Repeat password"
                className="text-[14px] text-[#767676] w-full border-b border-b-[#767676] outline-none pb-4"
              />
            </div>
          </div>
        </div>
        <h4 className="text-[14px] text-[#767676] font-dm flex gap-x-3.75 pb-7">
          {" "}
          <Square />I have read and agree to the Privacy Policy
        </h4>
        <h4 className="text-[14px] text-[#767676] font-dm flex gap-x-3.75 pb-7 items-center">
          Subscribe Newsletter{" "}
          <span className="flex text-center gap-x-3.75 ">
            <Square /> Yes
          </span>{" "}
          <span className="flex text-center gap-x-3.75 ">
            <SquareCheck /> No
          </span>
        </h4>
        <Link to={"/"}>
          <Button
            btnName={"Log in"}
            className={
              "text-[14px] font-bold font-dm text-white py-4 px-21.25 bg-black cursor-pointer border bordrer-2"
            }
          />
        </Link>
        <div className="pb-35"></div>
      </Container>
    </>
  );
};

export default SignUP;
