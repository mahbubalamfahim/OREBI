import React from 'react'
import { RiNumber2 } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";
import Container from "../components/Container";
import { RotateCcw } from 'lucide-react';

const Policy = () => {
  return (
    <Container className={"py-5"}>
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
        <RotateCcw />
        <h3 className="font-dm text-4 text-[#6D6D6D]">Return policy in 30 days</h3>
        </div>
      </div>
    </Container> 
  )
}

export default Policy