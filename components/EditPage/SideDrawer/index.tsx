"use client";
import React, { useEffect, useState } from "react";
import { Drawer } from "rsuite";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { LANGUAGES } from "@/config/languages";

const SideDrawer = () => {
  const [data, setData] = useState<any>({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    personalNumber: "",
    officeNumber: "",
    skype: "",
    countryOfResidence: "",
    cityOfResidence: "",
    presentAddress: "",
    permanentAddress: "",
    citizenship: "",
    languages: [],
    socialMedia: [
      {
        facebook: "",
        twitter: "",
        instagram: "",
        tiktok: "",
        linedin: "",
        pinterest: "",
        telegram: "",
        snapchat: "",
        youtube: "",
        github: "",
        dribble: "",
      },
    ],
    introduction: "",
    noOfYearsOfExperience: "",
    noOfAccomplishments: "",
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  });

  return (
    <div>
      <button
        className="py-2 text-sm text-white bg-blue-600 rounded-lg cursor-pointer md:text-xl px-7 hover:bg-blue-800"
        onClick={() => setIsOpen(true)}
      >
        Edit
      </button>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        size={isMobile ? "xs" : "sm"}
        backdrop={true}
      >
        <Drawer.Header>
          <Drawer.Title className="text-2xl font-semibold">
            Edit informations
          </Drawer.Title>
        </Drawer.Header>
        <Drawer.Body className="flex flex-col items-center w-full space-y-6 ">
          <h5 className="text-2xl font-bold text-black">
            Personal Information
          </h5>

          {/* TESTING START */}
          <div className="flex flex-col">
            <p>firstName - {data.firstName}</p>
            <p> lastName - {data.lastName}</p>
            <p>title - {data.title}</p>
            <p>email - {data.email}</p>
            <p>personalNumber - {data.personalNumber}</p>
            <p>officeNumber - {data.officeNumber}</p>
            <p>skype - {data.skype}</p>
            <p>countryOfResidence - {data.countryOfResidence}</p>
            <p>cityOfResidence - {data.cityOfResidence}</p>
            <p>presentAddress - {data.presentAddress}</p>
            <p> permanentAddress - {data.permanentAddress}</p>
            <p>citizenship - {data.citizenship}</p>
            <p>introduction - {data.introduction}</p>
            <p>noOfYearsOfExperience - {data.noOfYearsOfExperience}</p>
            <p>noOfAccomplishments - {data.noOfAccomplishments}</p>
          </div>
          {/* TESTING END */}
          <form className="flex flex-col items-center w-full space-y-6 ">
            <input
              className="w-full bp5-input bp5-large bp5-intent-primary"
              type="text"
              placeholder="First Name"
              dir="auto"
              onChange={(e) => setData({ ...data, firstName: e.target.value })}
            />
            <input
              className="w-full bp5-input bp5-large bp5-intent-primary"
              type="text"
              placeholder="Last Name"
              dir="auto"
              onChange={(e) => setData({ ...data, lastName: e.target.value })}
            />
            <input
              className="w-full bp5-input bp5-large bp5-intent-primary"
              type="text"
              placeholder="Title"
              dir="auto"
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
            <input
              className="w-full bp5-input bp5-large bp5-intent-primary"
              type="email"
              placeholder="Email"
              dir="auto"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required
            />
            <div className="flex flex-col items-start w-full space-y-3 font-bold">
              <p>Personal / Home Number : </p>
              <PhoneInput
                defaultCountry="bd"
                value={data.personalNumber}
                className="w-full"
                inputClassName="w-full"
                onChange={(number) =>
                  setData({ ...data, personalNumber: number })
                }
              />
            </div>
            <div className="flex flex-col items-start w-full space-y-3 font-bold">
              <p>Office Number : </p>
              <PhoneInput
                defaultCountry="bd"
                value={data.officeNumber}
                className="w-full"
                inputClassName="w-full"
                onChange={(number) =>
                  setData({ ...data, officeNumber: number })
                }
              />
            </div>

            <input
              className="w-full bp5-input bp5-large bp5-intent-primary "
              type="text"
              placeholder="Skype"
              dir="auto"
              onChange={(e) => setData({ ...data, skype: e.target.value })}
            />
            <CountryDropdown
              value={data.countryOfResidence}
              classes="w-full h-[40px] px-4 bg-gray-100 focus:outline-1 border-2 border-gray-300"
              onChange={(country) =>
                setData({ ...data, countryOfResidence: country })
              }
            />

            <RegionDropdown
              country={data.countryOfResidence}
              classes="w-full h-[40px] px-4 bg-gray-100 focus:outline-1 border-2 border-gray-300"
              value={data.cityOfResidence}
              onChange={(city) => setData({ ...data, cityOfResidence: city })}
            />
            <textarea
              className="w-full bp5-input bp5-large bp5-intent-primary"
              placeholder="Present Address"
              dir="auto"
              onChange={(e) =>
                setData({ ...data, presentAddress: e.target.value })
              }
            />
            <textarea
              className="w-full bp5-input bp5-large bp5-intent-primary"
              placeholder="Permanent Address"
              dir="auto"
              onChange={(e) =>
                setData({ ...data, permanentAddress: e.target.value })
              }
            />
            <CountryDropdown
              value={data.citizenship}
              classes="w-full h-[40px] px-4 bg-gray-100 focus:outline-1 border-2 border-gray-300"
              onChange={(country) => setData({ ...data, citizenship: country })}
            />

            <textarea
              className="w-full bp5-input bp5-large bp5-intent-primary"
              placeholder="Introduction"
              dir="auto"
              onChange={(e) =>
                setData({ ...data, introduction: e.target.value })
              }
            />
            <button
              type="button"
              className="rounded-full bp5-button bp5-icon-add bp5-intent-success bp5-large"
            >
              Submit
            </button>
          </form>
        </Drawer.Body>
      </Drawer>
    </div>
  );
};

export default SideDrawer;
