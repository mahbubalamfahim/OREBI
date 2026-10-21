import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import Button from "../components/Button";

const Login = () => {
  return (
    <>
      <Container>
        <h3 className="text-[49px] text-[#262626] font-bold font-dm pt-31 pb-2.75">
          Login
        </h3>
        <h3 className="text-[12px] text-[#767676] font-dm pb-31.25 flex items-center">
          <Link to={"/"}>Home</Link> <MdKeyboardArrowRight />
          <Link to={"/login"}>Login</Link>
        </h3>
        <h3 className="text-[16px] text-[#767676] font-dm pb-30">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem <br /> Ipsum has been the industry's standard dummy
          text ever since the.
        </h3>
        <div className="loginPart ">
          <h3 className="text-[39px] text-[#262626] font-bold font-dm  pb-10.5">
            Returning Customer
          </h3>
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
                Password
              </h4>
              <input
                type="password"
                placeholder=""
                className="text-[14px] text-[#767676] w-full border-b border-b-[#767676] outline-none pb-4"
              />
            </div>
          </div>
          <Link to={"/"}>
              <Button
                btnName={"Login"}
                className={
                  "text-[14px] font-bold font-dm text-[#262626] py-4 px-21.25 bg-white cursor-pointer border bordrer-2"
                }
              />
            </Link>
        </div>
        <div className="newCustomer pt-32.5 pb-35">
          <h3 className="text-[39px] text-[#262626] font-bold font-dm  pb-10.5">
            New Customer
          </h3>
           <h3 className="text-[16px] text-[#767676] font-dm pt-9.5 pb-12.75">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem <br /> Ipsum has been the industry's standard dummy
          text ever since the.
        </h3>
          <Link to={"/"}>
              <Button
                btnName={"Continue"}
                className={
                  "text-[14px] font-bold font-dm text-white py-4 px-21.25 bg-black cursor-pointer border bordrer-2"
                }
              />
            </Link>
        </div>
      </Container>
    </> 
  );
};

export default Login;
