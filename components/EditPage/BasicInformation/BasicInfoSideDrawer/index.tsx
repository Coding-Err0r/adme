"use client";
import React, { useEffect, useState } from "react";
import { Drawer } from "rsuite";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import MultiTags from "../../MultiTags";
import SocialMedia from "../../SocialMedia";

const BasicInfoSideDrawer = () => {
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
    socialMedia: [{ title: "", link: "" }],

    introduction: "",
    noOfYearsOfExperience: "",
    accomplishments: { title: "", years: "" },
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
        className="py-2 text-sm text-white rounded-lg cursor-pointer bg-sky-600 md:text-xl px-7 hover:bg-sky-800"
        onClick={() => setIsOpen(true)}
      >
        Edit
      </button>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        size={isMobile ? "xs" : "md"}
        backdrop={true}
        className="pl-8"
      >
        <Drawer.Header>
          <Drawer.Title className="text-2xl font-semibold">
            Basic Information
          </Drawer.Title>
        </Drawer.Header>
        <Drawer.Body className="flex flex-col items-start w-full space-y-6 ">
          <h5 className="text-xl text-black">
            Please fill out the information below
          </h5>
          <form className="flex flex-col items-center w-full space-y-6 ">
            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> First Name</label>
              <input
                className="w-full bp5-input bp5-large bp5-intent-primary"
                type="text"
                placeholder="First Name"
                dir="auto"
                onChange={(e) =>
                  setData({ ...data, firstName: e.target.value })
                }
              />
              <span className="text-xs">
                Your first name as it apprears in your National ID.
              </span>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> Last Name</label>
              <input
                className="w-full bp5-input bp5-large bp5-intent-primary"
                type="text"
                placeholder="Last Name"
                dir="auto"
                onChange={(e) => setData({ ...data, lastName: e.target.value })}
              />
              <span className="text-xs">
                Your last name as it apprears in your National ID.
              </span>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> Title</label>
              <input
                className="w-full bp5-input bp5-large bp5-intent-primary"
                type="text"
                placeholder="Title"
                dir="auto"
                onChange={(e) => setData({ ...data, title: e.target.value })}
              />
              <span className="text-xs">
                Enter the title you would like to display in your portfolio.
              </span>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> Citizenship</label>

              <CountryDropdown
                value={data.citizenship}
                classes="w-full h-[40px] px-4 bg-gray-100 focus:outline-1 border-2 border-gray-300"
                onChange={(country) =>
                  setData({ ...data, citizenship: country })
                }
              />

              <span className="text-xs">
                Please select you country of citizenship.
              </span>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> Language</label>

              <MultiTags data={data} setData={setData} />

              <span className="text-xs">
                Please select the languages that you know. If it is not in the
                list enter the language you wish to add.
              </span>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> Personal Number</label>

              <PhoneInput
                defaultCountry="bd"
                value={data.personalNumber}
                className="w-full"
                inputClassName="w-full"
                onChange={(number) =>
                  setData({ ...data, personalNumber: number })
                }
              />

              <span className="text-xs">
                Please enter your personal phone number.
              </span>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> Office Number</label>

              <PhoneInput
                defaultCountry="bd"
                value={data.officeNumber}
                className="w-full"
                inputClassName="w-full"
                onChange={(number) =>
                  setData({ ...data, officeNumber: number })
                }
              />

              <span className="text-xs">
                Please enter your office phone number.
              </span>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> Skype</label>

              <input
                className="w-full bp5-input bp5-large bp5-intent-primary "
                type="text"
                placeholder="Skype"
                dir="auto"
                onChange={(e) => setData({ ...data, skype: e.target.value })}
              />

              <span className="text-xs">
                Please enter your skype contact address.
              </span>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> Email Address</label>

              <input
                className="w-full bp5-input bp5-large bp5-intent-primary"
                type="email"
                placeholder="Email"
                dir="auto"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                required
              />

              <span className="text-xs">
                Please enter the email address you would like to display in your
                portfolio.
              </span>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> Country Of Residence</label>

              <CountryDropdown
                value={data.countryOfResidence}
                classes="w-full h-[40px] px-4 bg-gray-100 focus:outline-1 border-2 border-gray-300"
                onChange={(country) =>
                  setData({ ...data, countryOfResidence: country })
                }
              />

              <span className="text-xs">
                Please select your country of current residence.
              </span>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> City Of Residence</label>

              <RegionDropdown
                country={data.countryOfResidence}
                classes="w-full h-[40px] px-4 bg-gray-100 focus:outline-1 border-2 border-gray-300"
                value={data.cityOfResidence}
                onChange={(city) => setData({ ...data, cityOfResidence: city })}
              />

              <span className="text-xs">
                Please select your city of current residence.
              </span>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> Present Address</label>

              <textarea
                className="w-full bp5-input bp5-large bp5-intent-primary"
                placeholder="Present Address"
                dir="auto"
                onChange={(e) =>
                  setData({ ...data, presentAddress: e.target.value })
                }
              />

              <span className="text-xs">
                Please enter your full present address.
              </span>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> Permanent Address</label>

              <textarea
                className="w-full bp5-input bp5-large bp5-intent-primary"
                placeholder="Permanent Address"
                dir="auto"
                onChange={(e) =>
                  setData({ ...data, permanentAddress: e.target.value })
                }
              />

              <span className="text-xs">
                Please enter your full permanent address.
              </span>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> Introduction</label>

              <textarea
                className="w-full bp5-input bp5-large bp5-intent-primary"
                placeholder="Introduction"
                dir="auto"
                onChange={(e) =>
                  setData({ ...data, introduction: e.target.value })
                }
              />

              <span className="text-xs">
                Please add an introduction for your portfolio that brifly
                describes you.
              </span>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> Years Of Experience</label>

              <input
                className="w-full bp5-input bp5-large bp5-intent-primary "
                type="number"
                placeholder="No of years of experience"
                dir="auto"
                onChange={(e) =>
                  setData({ ...data, noOfYearsOfExperience: e.target.value })
                }
              />

              <span className="text-xs">
                Please enter the number of years of experience that you have.
              </span>
            </div>

            <div className="flex flex-col w-full space-y-4">
              <label className="text-lg"> Accomplishments</label>
              <div className="flex flex-col w-full space-y-2">
                <label className="text-sm"> Accomplishment Title</label>

                <input
                  className="w-full bp5-input bp5-large bp5-intent-primary "
                  type="text"
                  placeholder="No of projects"
                  dir="auto"
                  onChange={(e) =>
                    setData({
                      ...data,
                      accomplishments: {
                        ...data.accomplishments,
                        title: e.target.value,
                      },
                    })
                  }
                />

                <span className="text-xs">
                  Please give a title for you accomplishment. i.g. No of
                  project, No of Photography etc.
                </span>
              </div>

              <div className="flex flex-col w-full space-y-2">
                <label className="text-sm"> Accomplishment Number</label>

                <input
                  className="w-full bp5-input bp5-large bp5-intent-primary "
                  type="number"
                  placeholder="Enter a numer"
                  dir="auto"
                  onChange={(e) =>
                    setData({
                      ...data,
                      accomplishments: {
                        ...data.accomplishments,
                        years: e.target.value,
                      },
                    })
                  }
                />

                <span className="text-xs">
                  Please give total number of your accomplishments.
                </span>
              </div>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> Social Media</label>
              <SocialMedia data={data} setData={setData} />

              <span className="text-xs">
                Please enter the number of years of experience that you have.
              </span>
            </div>
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

export default BasicInfoSideDrawer;
