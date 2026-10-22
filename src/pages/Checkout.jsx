import { Link } from "react-router-dom";
import Container from "../components/Container";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaDotCircle } from "react-icons/fa";
import { Circle } from "lucide-react";
import Button from "../components/Button";

const Checkout = () => {
  return (
    <>
      <Container>
        <h3 className="text-[49px] text-[#262626] font-bold font-dm pt-31 pb-2.75">
          Checkout
        </h3>
        <h3 className="text-[12px] text-[#767676] font-dm pb-31.25 flex items-center">
          <Link to={"/"}>Home</Link> <MdKeyboardArrowRight />
          <Link to={"/checkout"}>Checkout</Link>
        </h3>
        <h4 className="text-[16px] font-dm text-[#767676] pb-30">
          Have a coupon?{" "}
          <Link to={"/"}>
            <b className="text-[#262626]">Click here to enter your code</b>
          </Link>
        </h4>
        <div className="billingDetails">
          <h3 className="text-[39px] text-[#262626] font-bold font-dm  pb-10.5">
            Billing Details
          </h3>
          <div className="flex items-center gap-x-10 pb-7.5">
            <div className="w-[30%]">
              <h4 className="text-[16px] text-[#262626] font-bold pb-2.5">
                First Name
              </h4>
              <input
                type="text"
                placeholder="First Name"
                className="text-[14px] text-[#767676] w-full border-b border-b-[#F0F0F0] outline-none pb-4"
              />
            </div>
            <div className="w-[30%]">
              <h4 className="text-[16px] text-[#262626] font-bold pb-2.5">
                Last Name*
              </h4>
              <input
                type="text"
                placeholder="Last Name"
                className="text-[14px] text-[#767676] w-full border-b border-b-[#F0F0F0] outline-none pb-4"
              />
            </div>
          </div>
          <h4 className="text-[16px] text-[#262626] font-bold pb-2.5">
            Companye Name (optional)
          </h4>
          <input
            type="text"
            placeholder="Companye Name"
            className="text-[14px] text-[#767676] w-full border-b border-b-[#F0F0F0] outline-none pb-4"
          />
          <h4 className="text-[16px] text-[#262626] font-bold pb-2.5">
            Country *
          </h4>
          <input
            type="text"
            placeholder="Please select"
            className="text-[14px] text-[#767676] w-full border-b border-b-[#F0F0F0] outline-none pb-4"
          />
          <h4 className="text-[16px] text-[#262626] font-bold pb-2.5">
            Street Address *
          </h4>
          <input
            type="text"
            placeholder="House number and street name"
            className="text-[14px] text-[#767676] w-full border-b border-b-[#F0F0F0] outline-none pb-4"
          />
          <input
            type="text"
            placeholder="Apartment, suite, unit etc. (optional)"
            className="text-[14px] text-[#767676] w-full border-b border-b-[#F0F0F0] outline-none pb-4"
          />
          <h4 className="text-[16px] text-[#262626] font-bold pb-2.5">
            Town/City *
          </h4>
          <input
            type="text"
            placeholder="Town/City"
            className="text-[14px] text-[#767676] w-full border-b border-b-[#F0F0F0] outline-none pb-4"
          />
          <h4 className="text-[16px] text-[#262626] font-bold pb-2.5">
            County (optional)
          </h4>
          <input
            type="text"
            placeholder="County"
            className="text-[14px] text-[#767676] w-full border-b border-b-[#F0F0F0] outline-none pb-4"
          />
          <h4 className="text-[16px] text-[#262626] font-bold pb-2.5">
            Post Code *
          </h4>
          <input
            type="text"
            placeholder="Post Code"
            className="text-[14px] text-[#767676] w-full border-b border-b-[#F0F0F0] outline-none pb-4"
          />
          <h4 className="text-[16px] text-[#262626] font-bold pb-2.5">
            Phone *
          </h4>
          <input
            type="text"
            placeholder="Phone"
            className="text-[14px] text-[#767676] w-full border-b border-b-[#F0F0F0] outline-none pb-4"
          />
          <h4 className="text-[16px] text-[#262626] font-bold pb-2.5">
            Email Address *
          </h4>
          <input
            type="text"
            placeholder="Email"
            className="text-[14px] text-[#767676] w-full border-b border-b-[#F0F0F0] outline-none pb-4"
          />
        </div>
        <h3 className="pt-32.5 pb-10.5 text-[#262626] text-[39px] font-bold font-dm ">
          Additional Information
        </h3>
        <h3 className="pb-2.5 text-[#262626] text-[16px] font-bold font-dm ">
          Other Notes (optional)
        </h3>
        <h4 className="pb-54 text-[#767676] text-[14px] font-dm">
          Notes about your order, e.g. special notes for delivery.
        </h4>
        <h3 className="text-[#262626] text-[39px] font-bold font-dm pb-12">
          Your Order
        </h3>
        <table className="w-[45%] border border-[#F0F0F0] border-collapse pb-15">
          <thead>
            <tr>
              <th className="w-1/2 border border-[#F0F0F0] px-5 py-4 text-left font-semibold">
                Product
              </th>
              <th className="w-1/2 border border-[#F0F0F0] px-5 py-4 text-left font-normal text-[#767676]">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#F0F0F0] px-5 py-4 font-semibold">
                Product name x 1
              </td>
              <td className="border border-[#F0F0F0] px-5 py-4 text-[#767676]">
                389.99 $
              </td>
            </tr>

            <tr>
              <td className="border border-[#F0F0F0] px-5 py-4 font-semibold">
                Subtotal
              </td>
              <td className="border border-[#F0F0F0] px-5 py-4">389.99 $</td>
            </tr>

            <tr>
              <td className="border border-[#F0F0F0] px-5 py-4 font-semibold">
                Total
              </td>
              <td className="border border-[#F0F0F0] px-5 py-4">389.99 $</td>
            </tr>
          </tbody>
        </table>
        <div className="w-285 m-auto border border-[#F0F0F0]">
          <div className=" flex items-center gap-x-5 pt-21 pb-3.5">
            <FaDotCircle />
            <h4 className="text-[16px] text-[#262626] font-dm font-bold">
              Bank
            </h4>
          </div>
          <div className="bg-[#F7F8F9] w-[65%] pb-6.5">
            <h4 className="text-[14px] text-[#767676] font-dm pt-7 pb-4 pl-6.5">
              Pay via Bank; you can pay with your credit card if you don’t have
              a Bank account.
            </h4>
          </div>
          <div className=" flex items-center gap-x-5 pt-21 pb-3.5">
            <Circle />
            <h4 className="text-[16px] text-[#262626] font-dm font-bold">
              Bank 2
            </h4>
          </div>
          <h4 className="text-[16px] text-[#767676] font-dm pt-4 pb-6">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes <br />described in our <b>privacy policy.</b></h4>
          <Link to={"/"}>
          <Button
            btnName={"Proceed to Bank"}
            className={
              "text-[14px] font-bold font-dm text-white py-4 px-21.25 bg-black cursor-pointer border bordrer-2"
            }
          />
        </Link>
        <div className="pb-46.5"></div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
