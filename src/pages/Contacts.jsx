import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import Button from "../components/Button";

const Contacts = () => {
  return (
    <>
      <Container>
        <h3 className="text-[49px] text-[#262626] font-bold font-dm pt-31 pb-2.75">
          Contacts
        </h3>
        <h3 className="text-[12px] text-[#767676] font-dm pb-31.25 flex items-center">
          <Link to={"/"}>Home</Link> <MdKeyboardArrowRight />
          <Link to={"/contacts"}>Contacts</Link>
        </h3>
        <div className="frombox font-dm pb-7.5">
          <h3 className="text-[39px] text-[#262626] font-bold  pb-10.5">
            Fill up a Form
          </h3>
          <h4 className="text-[16px] text-[#262626] font-bold pb-2.5">Name</h4>
          <input
            type="text"
            placeholder="Your name here"
            className="text-[14px] text-[#767676] w-[35%] border-b border-b-[#767676] outline-none pb-6"
          />
          <h4 className="text-[16px] text-[#262626] font-bold pb-2.5">Email</h4>
          <input
            type="text"
            placeholder="Your email here"
            className="text-[14px] text-[#767676] w-[35%] border-b border-b-[#767676] outline-none pb-6"
          />
          <h4 className="text-[16px] text-[#262626] font-bold pb-2.5">
            Message
          </h4>
          <input
            type="text"
            placeholder="Your message here"
            className="text-[14px] text-[#767676] w-[35%] border-b border-b-[#767676] outline-none pb-4"
          />
        </div>
        <Link to={"/"}>
          <Button
            btnName={"Post"}
            className={
              "text-[14px] font-bold font-dm text-white py-4 px-21.25 bg-black cursor-pointer"
            }
          />
        </Link>
        {/* Map add Start  */}
        <div className="flex flex-col md:flex-row w-full mt-10 border border-[#e0e0e0] py-35">
          {/* Left Side: Address Tabs */}
          <div className="w-full md:w-[30%] bg-white p-6 border-r border-[#e0e0e0] flex flex-col justify-center">
            {/* Germany Office */}
            <div className="mb-6 border-b border-[#f0f0f0] pb-4">
              <div className="flex justify-between items-center cursor-pointer">
                <h4 className="text-[16px] font-bold text-[#262626]">
                  Germany Office
                </h4>
                <span className="text-xl text-[#767676]">+</span>
              </div>
            </div>
            {/* Slovakia Office */}
            <div className="mb-6 border-b border-[#f0f0f0] pb-4">
              <div className="flex justify-between items-center cursor-pointer">
                <h4 className="text-[16px] font-bold text-[#262626]">
                  Slovakia Office
                </h4>
                <span className="text-xl text-[#767676]">+</span>
              </div>
            </div>
            {/* Lithuania Office (Active / Opened) */}
            <div className="mb-4">
              <div className="flex justify-between items-center cursor-pointer mb-3">
                <h4 className="text-[16px] font-bold text-[#262626]">
                  Lithuania Office
                </h4>
                <span className="text-xl text-[#767676]">-</span>
              </div>
              <div className="text-[14px] text-[#767676] space-y-2 leading-relaxed">
                <p>575 Crescent Ave. Quakertown, PA 18951</p>
                <p>+432 533 12 523</p>
                <p>info@domain.com</p>
                <p>Mon - Fri: 9am - 6pm</p>
              </div>
            </div>
          </div>
          {/* Right Side: Google Map iframe */}
          <div className="w-full md:w-[70%] h-112.5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8044.315757476356!2d90.3733362384141!3d23.747276763399373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1792497410961!5m2!1sen!2sbd"
              className="w-full h-full border-none"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Map ad end  */}
      </Container>
    </>
  );
};

export default Contacts;
