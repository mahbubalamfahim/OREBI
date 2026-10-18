import Container from '../components/Container'
import Product from '../components/Product'
import SpecialOffersOne from '../assets/Special Offers-01.png'
import SpecialOffersTwo from '../assets/Special Offers-02.png'
import SpecialOffersThree from '../assets/Special Offers-03.png'
import SpecialOffersFour from '../assets/Special Offers-04.png'

const SpecialOffers = () => {
  return (
    <>
    <Container className={"pb-35"}>
        <h3 className="font-dm font-bold text-[#262626] text-[39px] pb-12">Special Offers</h3>
        <div className=" flex items-center gap-x-10">
            <div className="w-1/4">
            <Product productImg={SpecialOffersOne} productBadge={"New"} productName={"Basic Crew Neck Tee"} productPrice={"$44.00"} productColour={"black"}/>
            </div>
            <div className="w-1/4">
            <Product productImg={SpecialOffersTwo} productBadge={"New"} productName={"Basic Crew Neck Tee"} productPrice={"$44.00"} productColour={"black"}/>
            </div>
            <div className="w-1/4">
            <Product productImg={SpecialOffersThree} productBadge={"New"} productName={"Basic Crew Neck Tee"} productPrice={"$44.00"} productColour={"black"}/>
            </div>
            <div className="w-1/4">
            <Product productImg={SpecialOffersFour} productBadge={"New"} productName={"Basic Crew Neck Tee"} productPrice={"$44.00"} productColour={"black"}/>
            </div>
        </div>
    </Container>
    </>
  )
}

export default SpecialOffers