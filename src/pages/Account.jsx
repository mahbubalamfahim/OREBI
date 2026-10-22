
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const Account = () => {
  return (
    <>
      <Container>
        <h3 className="text-[49px] text-[#262626] font-bold font-dm pt-31 pb-2.75">
          My Account
        </h3>
        <h3 className="text-[12px] text-[#767676] font-dm pb-31.25 flex items-center">
          <Link to={"/"}>Home</Link> <MdKeyboardArrowRight />
          <Link to={"/account"}>My account</Link>
        </h3>
        <div className="flex gap-x-30 pb-35">
          <div className="w-[20%]">
            <h3 className="text-[16px] text-[#262626] font-bold font-dm">
              Dashboard
            </h3>
            <div className="py-5">
              <div className="bg-[#F0F0F0] w-full h-0.5 "></div>
            </div>
            <Link to={"/"}>
              <h3 className="text-[16px] text-[#767676] font-dm">Others</h3>
            </Link>
            <div className="py-5">
              <div className="bg-[#F0F0F0] w-full h-0.5 "></div>
            </div>
            <Link to={"/"}>
              <h3 className="text-[16px] text-[#767676] font-dm">Donwloads</h3>
            </Link>
            <div className="py-5">
              <div className="bg-[#F0F0F0] w-full h-0.5 "></div>
            </div>
            <Link to={"/"}>
              <h3 className="text-[16px] text-[#767676] font-dm">Addresses</h3>
            </Link>
            <div className="py-5">
              <div className="bg-[#F0F0F0] w-full h-0.5 "></div>
            </div>
            <Link to={"/"}>
              <h3 className="text-[16px] text-[#767676] font-dm">
                Account details
              </h3>
            </Link>
            <div className="py-5">
              <div className="bg-[#F0F0F0] w-full h-0.5 "></div>
            </div>
            <Link to={"/"}>
              <h3 className="text-[16px] text-[#767676] font-dm">Logout</h3>
            </Link>
            <div className="py-5">
              <div className="bg-[#F0F0F0] w-full h-0.5 "></div>
            </div>
          </div>
          <div className="">
            <h4 className="text-[16px] text-[#767676] font-dm pb-12">
              Hello <b className="text-[#262626]">admin?</b> (not <b className="text-[#262626]">admin?</b>
              <b className="text-[#262626]">
                <Link to={"/"}>Log out</Link>
              </b>
              )
            </h4>
            <h4 className="text-[16px] text-[#767676] font-dm">From your account dashboard you can view your <b className="text-[#262626]">recent orders</b>, manage your <b className="text-[#262626]">shipping and billing addresses,</b> and <b className="text-[#262626]">edit your <br />password and account details.</b></h4>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Account;
