import React from "react";
import Banner from "../components/Banner";
import Policy from "../layout/Policy";
import Ads from "../layout/Ads";
import NewArrival from "../layout/NewArrival";
import BestSellers from "../layout/BestSellers";
import SecondAd from "../layout/SecondAd";
import SpecialOffers from "../layout/SpecialOffers";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <Policy />
      <Ads/>
      <NewArrival/>
      <BestSellers/>
      <SecondAd/>
      <SpecialOffers/>
    </>
  );
};

export default Home;
