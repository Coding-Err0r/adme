"use client";
import Carousel from "@/components/Carousel";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Instruction from "@/components/Instruction";
import QRCode from "@/components/QRCodes";
import Review from "@/components/Review";

const Home = () => {
  return (
    <div>
      <Hero />
      <Carousel />
      <Instruction />
      <Features />
      <QRCode />
      <Faq />
      <Review />
    </div>
  );
};
export default Home;
