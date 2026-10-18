import Image from "./Image";
import Badge from "./Badge";
import { FaHeart } from "react-icons/fa";
import { RefreshCw } from "lucide-react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Product = ({
  productImg,
  productBadge,
  productName,
  productPrice,
  productColour,
}) => {
  return (
    <div className="relative group">
      <div className="relative">
        <Image imgSrc={productImg} />
        <Badge className={" absolute top-5 left-5"} badgeName={productBadge} />
      </div>
      <div className="flex items-center justify-between">
        <h3 className={"pt-6 pb-4"}>{productName}</h3>
        <h4 className={"text-4 font-dm text-[#767676]"}>{productPrice}</h4>
      </div>
      <h4 className={"text-4 font-dm text-[#767676]"}>{productColour}</h4>
      <div
        className="absolute bottom-20 left-0 z-10 w-full bg-white px-6 py-4
    opacity-0 invisible translate-y-4
    transition-all duration-300 ease-out
    group-hover:opacity-100 group-hover:visible
    group-hover:translate-y-0"
      >
        <Link to={"/"}>
          <div className="flex items-center justify-end gap-x-4 text-4 text-[#767676] font-dm">
            Add to Wish List <FaHeart className={"text-[#262626]"} />
          </div>
        </Link>
        <Link to={"/"}>
          <div className="flex items-center justify-end gap-x-4 text-4 text-[#767676] font-dm py-5">
            Compare <RefreshCw className={"text-[#262626]"} />
          </div>
        </Link>
        <Link to={"/"}>
          <div className="flex items-center justify-end gap-x-4 text-4 text-[#262626] font-bold font-dm">
            Add to Cart <FaCartShopping />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
