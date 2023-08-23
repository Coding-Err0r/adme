"use client";
import { Card, Elevation } from "@blueprintjs/core";
import React from "react";
import ImageCrop from "../ImageCrop";
import Dribble from "../SVGIcons/Dribble";
import Facebook from "../SVGIcons/Facebook";
import Github from "../SVGIcons/Github";
import Instagram from "../SVGIcons/Instagram";
import Linkedin from "../SVGIcons/Linedin";
import Pinterest from "../SVGIcons/Pinterest";
import Snapchat from "../SVGIcons/Snapchat";
import Telegram from "../SVGIcons/Telegram";
import Tiktok from "../SVGIcons/Tiktok";
import Twitter from "../SVGIcons/Twitter";
import UserIcon from "../SVGIcons/UserIcon";
import Youtube from "../SVGIcons/Youtube";
import BasicInfoSideDrawer from "./BasicInfoSideDrawer";

import TipsDesktop from "../Tips/TipsDesktop";
import TipsMobile from "../Tips/TipMobile";

const languages = ["Bangla", "Hindi", "English"];

const BasicInformation = () => {
  return (
    <section className="w-full font-light bg-white font-sunflower">
      <div className="flex justify-center">
        <div className="w-full  xl:max-w-[118.75rem] xl:py-10 xl:px-12 md:p-4  p-2">
          <div className="grid grid-cols-9 gap-6">
            <div className="flex flex-col col-span-9 xl:col-span-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <UserIcon />
                  <h1 className="py-4 text-lg text-left text-gray-800 lg:text-4xl md:text-3xl">
                    Basic Information
                  </h1>
                </div>
                <BasicInfoSideDrawer />
              </div>
              <Card elevation={Elevation.ONE} className="rounded-lg">
                <div className="grid grid-cols-1 px-4 py-8 xl:gap-16 md:grid-cols-2 md:gap-24">
                  <div className="flex flex-col space-y-6">
                    <div className="grid justify-center gap-4 md:space-x-4 md:items-center md:flex md:justify-start">
                      <ImageCrop />
                      <div className="flex flex-col items-center space-y-1 text-black md:items-start">
                        <p className="text-[24px] font-bold  font-sunflower ">
                          Akash Shahriar
                        </p>
                        <p className="text-[20px] font-medium  font-sunflower">
                          Software Engineer
                        </p>
                        <p className="text-[18px] font-medium  font-sunflower">
                          Bangladesh
                        </p>
                      </div>
                    </div>
                    <div className="text-[18px] text-black flex items-center space-x-1">
                      <h4 className="font-bold text-[18px]"> Language : </h4>
                      <div className="flex items-center mb-1 space-x-1 lg:space-x-2">
                        {languages.map((language: string, index: number) => (
                          <p
                            key={index}
                            className={`${index === 0 ? "mt-[5px]" : null}`}
                          >
                            {language}
                            {index + 1 !== languages.length ? ", " : null}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <h1 className="py-4 text-[24px] font-bold text-black ">
                        Contact Information
                      </h1>
                      <h5 className="text-[18px] text-gray-600 ">
                        <strong className="text-black">Phone Number : </strong>
                        (+880) 1879079252
                      </h5>
                      <h5 className="text-[18px] text-gray-600">
                        <strong className="text-black">Office Number : </strong>
                        (+880) 1776733337
                      </h5>
                      <h5 className="text-[18px] text-gray-600">
                        <strong className="text-black">Skype : </strong>
                        s@3414432
                      </h5>
                      <h5 className="text-[18px] text-gray-600">
                        <strong className="text-black">Email : </strong>
                        akashshahriar55@gmail.com
                      </h5>
                    </div>

                    <div className="flex flex-col space-y-3">
                      <h1 className="py-4 text-[24px] font-bold text-black ">
                        Social Media
                      </h1>
                      <div className="grid grid-cols-5 gap-3 md:gap-8">
                        <Facebook />
                        <Twitter />
                        <Instagram />
                        <Tiktok />
                        <Linkedin />
                        <Pinterest />
                        <Telegram />
                        <Snapchat />
                        <Youtube />
                        <Github />
                        <Dribble />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-6">
                    <div className="flex flex-col items-start space-y-2 text-sm lg:text-xl md:text-lg ">
                      <h1 className="py-4 text-[24px] font-bold text-black md:pb-5  md:py-0 xl:py-0">
                        Address
                      </h1>

                      <h5 className="text-[18px] text-gray-600">
                        <strong className="text-black">
                          Country of residence :{" "}
                        </strong>
                        Bangladesh
                      </h5>
                      <h5 className="text-[18px] text-gray-600">
                        <strong className="text-black">
                          City of residence :{" "}
                        </strong>
                        Dhaka
                      </h5>
                      <h5 className="text-[18px] text-gray-600">
                        <strong className="text-black">
                          Present Address :{" "}
                        </strong>
                        House - 31, Road - 1/D , Nikunja 1 , Khilkhet - 1229
                      </h5>
                      <h5 className="text-[18px] text-gray-600">
                        <strong className="text-black">
                          Permanent Address :{" "}
                        </strong>
                        House - 31, Road - 1/D , Nikunja 1 , Khilkhet - 1229
                      </h5>
                    </div>
                    <div className="flex flex-col items-start space-y-2 text-sm lg:text-xl md:text-lg">
                      <h1 className="py-4 text-[24px] font-bold text-black xl:py-8 ">
                        Introduction
                      </h1>
                      <div className="flex items-center space-x-3 text-gray-700">
                        <p className="text-[18px] text-justify ">
                          Akash is a seasoned Android developer experienced in
                          building mobile products with millions of daily active
                          users. He has worked with cross-functional teams in
                          Agile environments using MVVM architecture and
                          following solid principles and Android best practices.
                          Some of the best apps Akash developed are published in
                          the Google Play store and have more than 10 million
                          downloads.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-3">
                      <h5 className="text-[18px] text-black ">
                        <strong>Years of Experience : </strong>
                        03
                      </h5>
                      <h5 className="text-[18px] text-black ">
                        <strong>No of Projects : </strong>
                        03
                      </h5>
                    </div>
                  </div>
                </div>
                <TipsMobile
                  text={`To make your profile look professional please follow the below
          guideline `}
                  list={[
                    `Upload a high quality profile picture where your face is visible.`,
                    `Keep your introduction short and as much as descriptive.`,
                    `Give your working email address.`,
                    `Give your working phone number.`,
                    `Give your full address.`,
                    `Add all the social media’s you are active in.`,
                  ]}
                />
              </Card>
            </div>

            <TipsDesktop
              text={`To make your profile look professional please follow the below
          guideline `}
              list={[
                `Upload a high quality profile picture where your face is visible.`,
                `Keep your introduction short and as much as descriptive.`,
                `Give your working email address.`,
                `Give your working phone number.`,
                `Give your full address.`,
                `Add all the social media’s you are active in.`,
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicInformation;
