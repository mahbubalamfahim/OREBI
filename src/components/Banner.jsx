
import { Link } from 'react-router-dom'
import Image from './Image'
import banner from "../assets/Banner-01.png"

const Banner = () => {
  return (
        <Link to={"/shop"}>
        <Image imgSrc={banner} imgAlt={"Banner"}/>
        </Link>
  )
}

export default Banner