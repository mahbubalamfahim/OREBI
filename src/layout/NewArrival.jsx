import React from "react";
import Container from "../components/Container";
import Product from "../components/Product";
import nAFirst from "../assets/NA-1.png";
import nASecond from "../assets/NA-2.png";
import nAThird from "../assets/NA-3.png";
import nAFour from "../assets/NA-4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const NewArrival = () => {
  return (
    <>
      <Container>
        <h3 className="font-dm font-bold text-[#262626] text-[39px] pb-12">
          New Arrivals
        </h3>
        <Swiper
          slidesPerView={4}
          slidesPerGroup={1}
          spaceBetween={40}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Product
              productImg={nAFirst}
              productBadge={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
              productColour={"black"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Product
              productImg={nASecond}
              productBadge={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
              productColour={"black"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Product
              productImg={nAThird}
              productBadge={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
              productColour={"black"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Product
              productImg={nAFour}
              productBadge={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
              productColour={"black"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Product
              productImg={nAFirst}
              productBadge={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
              productColour={"black"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Product
              productImg={nASecond}
              productBadge={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
              productColour={"black"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Product
              productImg={nAThird}
              productBadge={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
              productColour={"black"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Product
              productImg={nAFour}
              productBadge={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
              productColour={"black"}
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
};

export default NewArrival;
