"use client";


import Carousel from "@/components/Global Components/Carousel";
import Faq from "@/components/Global Components/Faq";
import Features from "@/components/Global Components/Features";
import Hero from "@/components/Global Components/Hero";
import Instruction from "@/components/Global Components/Instruction";
import QRCode from "@/components/Global Components/QRCodes";
import Review from "@/components/Global Components/Review";
import Layout from "@/components/Page Components/Layout";



const Home = () => {
  return (
    <Layout>
      <div className="bg-[#f2f2f2] w-full h-full fixed -z-30" />
      <Hero />
      <Carousel />
      <Instruction />
      <Features />
      <QRCode />
      <Faq />
      <Review />
    </Layout>
  );
};
export default Home;
