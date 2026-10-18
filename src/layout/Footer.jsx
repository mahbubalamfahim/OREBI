import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Image from '../components/Image'
import logo from '../assets/Logo.png'
import { TiSocialFacebook } from 'react-icons/ti'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <div className="bg-[#F5F5F3]">
      <Container>
      <div className=" flex  justify-between pt-13.75 pb-16.25">
        <div className="w-[40%] flex  items-center justify-between">
          <div className="w-1/3">
            <h3 className="text-[16px] text-[#262626] font-dm font-bold pb-4.25">Menu</h3>
            <h4 className="text-[14px] text-[#6D6D6D] font-dm pb-1.5"><Link to={"/"}>Home</Link></h4>
            <h4 className="text-[14px] text-[#6D6D6D] font-dm pb-1.5"><Link to={"/shop"}>Shop</Link></h4>
            <h4 className="text-[14px] text-[#6D6D6D] font-dm pb-1.5"><Link to={"/about"}>About</Link></h4>
            <h4 className="text-[14px] text-[#6D6D6D] font-dm pb-1.5"><Link to={"/contact"}>Contact</Link></h4>
            <h4 className="text-[14px] text-[#6D6D6D] font-dm"><Link to={"/"}>Journal</Link></h4>
          </div>
          <div className="w-1/3">
            <h3 className="text-[16px] text-[#262626] font-dm font-bold pb-4.25">SHOP</h3>
            <h4 className="text-[14px] text-[#6D6D6D] font-dm pb-1.5"><Link to={"/shop"}>Category 1</Link></h4>
            <h4 className="text-[14px] text-[#6D6D6D] font-dm pb-1.5"><Link to={"/shop"}>Category 2</Link></h4>
            <h4 className="text-[14px] text-[#6D6D6D] font-dm pb-1.5"><Link to={"/shop"}>Category 3</Link></h4>
            <h4 className="text-[14px] text-[#6D6D6D] font-dm pb-1.5"><Link to={"/shop"}>Category 4</Link></h4>
            <h4 className="text-[14px] text-[#6D6D6D] font-dm"><Link to={"/shop"}>Category 5</Link></h4>
          </div>
          <div className="w-1/3">
            <h3 className="text-[16px] text-[#262626] font-dm font-bold pb-4.25">HELP</h3>
            <h4 className="text-[14px] text-[#6D6D6D] font-dm pb-1.5"><Link to={"/contact"}>Privacy Policy</Link></h4>
            <h4 className="text-[14px] text-[#6D6D6D] font-dm pb-1.5"><Link to={"/contact"}>Terms & Conditions</Link></h4>
            <h4 className="text-[14px] text-[#6D6D6D] font-dm pb-1.5"><Link to={"/contact"}>Special E-shop</Link></h4>
            <h4 className="text-[14px] text-[#6D6D6D] font-dm pb-1.5"><Link to={"/contact"}>Shipping</Link></h4>
            <h4 className="text-[14px] text-[#6D6D6D] font-dm"><Link to={"/contact"}>Secure Payments</Link></h4>
          </div>
        </div>
        <div className="w-[30%] ">
          <h3 className="text-4 text-[#262626] font-bold font-dm">(052) 611-5711</h3>
          <h3 className="text-4 text-[#262626] font-bold font-dm pt-2 pb-4">company@domain.com</h3>
          <h4 className="text-[14px] text-[#6D6D6D] font-dm">575 Crescent Ave. Quakertown, PA 18951</h4>
        </div>
        <div className="w-[20%]  ">
          <Link to={"/"}><Image imgSrc={logo}/></Link>
        </div>
      </div>
      <div className="flex items-center justify-between pb-15">
        <div className="flex items-center gap-x-6.5 text-[20px]">
          <Link to={"/"}><TiSocialFacebook /></Link>
          <Link to={"/"}><FaLinkedinIn /></Link>
          <Link to={"/"}><FaInstagram /></Link>   
        </div>
        <h3 className="text-[14px] text-[#6D6D6D] font-dm">2020 Orebi Minimal eCommerce Figma Template by Adveits</h3>
      </div>
    </Container>
    </div>
    </>
  )
}

export default Footer