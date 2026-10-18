import Container from "../components/Container";
import Product from "../components/Product";
import BestSellerOne from "../assets/BS-01.png";
import BestSellerTwo from "../assets/BS-02.png";
import BestSellerThree from "../assets/BS-03.png";
import BestSellerFour from "../assets/BS-04.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

const BestSellers = () => {
  const bestSellerProducts = [
    BestSellerOne,
    BestSellerTwo,
    BestSellerThree,
    BestSellerFour,
  ];

  return (
    <>
      <Container>
        <h3 className="font-dm font-bold text-[#262626] text-[39px] pb-12 pt-29.5">
          Our Bestsellers
        </h3>

        <Swiper
          slidesPerView={4}
          spaceBetween={40}
          slidesPerGroup={1}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          freeMode={true}
          freeModeMomentum={false}
          modules={[Autoplay, FreeMode]}
          className="bestSellerSwiper"
        >
          {[...bestSellerProducts, ...bestSellerProducts].map((img, index) => (
            <SwiperSlide key={index}>
              <Product
                productImg={img}
                productBadge={"New"}
                productName={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
                productColour={"black"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default BestSellers;
