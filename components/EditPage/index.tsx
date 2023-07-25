"use client";
import {
  faAt,
  faBook,
  faGlobe,
  faHashtag,
  faHeading,
  faLanguage,
  faListCheck,
  faLocationDot,
  faPhone,
  faUser,
  faUserClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SideDrawer from "./SideDrawer";
import { TagInput } from "@blueprintjs/core";
import Skype from "./SVGIcons/Skype";
import Facebook from "./SVGIcons/Facebook";
import Twitter from "./SVGIcons/Twitter";
import Instagram from "./SVGIcons/Instagram";
import Tiktok from "./SVGIcons/Tiktok";
import Linkedin from "./SVGIcons/Linedin";
import Pinterest from "./SVGIcons/Pinterest";
import Telegram from "./SVGIcons/Telegram";
import Snapchat from "./SVGIcons/Snapchat";
import Youtube from "./SVGIcons/Youtube";
import Github from "./SVGIcons/Github";
import Dribble from "./SVGIcons/Dribble";

const EditPage = () => {
  const languages = ["English", "Bangla", "Japanese", "Russian"];
  return (
    <section className="w-full">
      <div className="flex flex-col items-center w-full">
        <div className="w-[80%]  max-w-7xl py-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faUser} className="w-6 h-6" />
              <h1 className="py-4 text-lg font-semibold text-left text-gray-800 lg:text-4xl md:text-3xl">
                Basic Information
              </h1>
            </div>
            <SideDrawer />
          </div>
          <div className="flex flex-col space-y-5 md:p-[4rem] py-3 ">
            <div className="flex items-center space-x-3 text-sm lg:text-2xl md:text-xl">
              <div className="flex items-center space-x-2 text-black">
                <FontAwesomeIcon
                  icon={faUser}
                  className="w-3 h-3 lg:h-5 lg:w-5 md:h-4 md:w-4"
                />
                <h4 className="font-bold"> Name : </h4>
              </div>
              <p className="normal-case">MD RHINEUL ISLAM</p>
            </div>
            <div className="flex items-center space-x-3 text-sm lg:text-2xl md:text-xl">
              <div className="flex items-center space-x-2 text-black">
                <FontAwesomeIcon
                  icon={faHeading}
                  className="w-3 h-3 lg:h-5 lg:w-5 md:h-4 md:w-4"
                />
                <h4 className="font-bold"> Title : </h4>
              </div>
              <p className="normal-case">Full Stack Developer</p>
            </div>
            <div className="flex items-center space-x-3 text-sm lg:text-2xl md:text-xl">
              <div className="flex items-center space-x-2 text-black">
                <FontAwesomeIcon
                  icon={faAt}
                  className="w-3 h-3 lg:h-5 lg:w-5 md:h-4 md:w-4"
                />
                <h4 className="font-bold"> Email : </h4>
              </div>
              <p className="normal-case ">rhine.islam@cookietechltd.com</p>
            </div>
            <div className="flex flex-col items-start space-y-2 text-sm lg:text-2xl md:text-xl">
              <div className="flex items-center space-x-2 text-black">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-3 h-3 lg:h-5 lg:w-5 md:h-4 md:w-4"
                />
                <h4 className="font-bold"> Phone Number : </h4>
              </div>
              <div className="flex items-center space-x-3 pl-7">
                <h5 className="text-sm font-bold md:text-xl">
                  Personal/Home :
                </h5>
                <p>+8801752389981</p>
              </div>
              <div className="flex items-center space-x-3 pl-7">
                <h5 className="text-sm font-bold md:text-xl">Office :</h5>
                <p>+8801752389981</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-sm lg:text-2xl md:text-xl">
              <div className="flex items-center space-x-2 text-black">
                <Skype />
                <h4 className="font-bold"> Skype : </h4>
              </div>
              <p className="normal-case ">CID:12783t187218375</p>
            </div>
            <div className="flex flex-col items-start space-y-2 text-sm lg:text-2xl md:text-xl">
              <div className="flex items-center space-x-2 text-black">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="w-3 h-3 lg:h-5 lg:w-5 md:h-4 md:w-4"
                />
                <h4 className="font-bold">Address : </h4>
              </div>
              <div className="flex items-center space-x-3 pl-7">
                <h5 className="text-sm font-bold md:text-xl">
                  Country of residence :
                </h5>
                <p>Bangladesh</p>
              </div>
              <div className="flex items-center space-x-3 pl-7">
                <h5 className="text-sm font-bold md:text-xl">
                  City of residence :
                </h5>
                <p>Rajshahi</p>
              </div>
              <div className="flex items-center space-x-3 pl-7">
                <h5 className="text-sm font-bold md:text-xl">
                  Present Address :
                </h5>
                <p>Sultanabad, Ghoramara, Boalia, 6100, Rajshahi,Bandladesh</p>
              </div>
              <div className="flex items-center space-x-3 pl-7">
                <h5 className="text-sm font-bold md:text-xl">
                  Permanent Address :
                </h5>
                <p>Sultanabad, Ghoramara, Boalia, 6100, Rajshahi,Bandladesh</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-sm lg:text-2xl md:text-xl">
              <div className="flex items-center space-x-2 text-black">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="w-3 h-3 lg:h-5 lg:w-5 md:h-4 md:w-4"
                />
                <h4 className="font-bold"> Citizenship : </h4>
              </div>
              <p className="normal-case">Bangladeshi</p>
            </div>
            <div className="flex items-center space-x-3 text-sm lg:text-2xl md:text-xl">
              <div className="flex items-center space-x-2 text-black">
                <FontAwesomeIcon
                  icon={faLanguage}
                  className="w-3 h-3 lg:h-5 lg:w-5 md:h-4 md:w-4"
                />
                <h4 className="font-bold"> Language : </h4>
              </div>
              <TagInput values={languages} large disabled />
            </div>
            <div className="flex flex-col items-start space-y-2 text-sm lg:text-2xl md:text-xl">
              <div className="flex items-center space-x-2 text-black">
                <FontAwesomeIcon
                  icon={faHashtag}
                  className="w-3 h-3 lg:h-5 lg:w-5 md:h-4 md:w-4"
                />
                <h4 className="font-bold"> Social Media : </h4>
              </div>
              <div className="flex items-center space-x-3 pl-7">
                <Facebook />
                <h5 className="text-sm font-bold text-black md:text-xl">
                  Facebook :
                </h5>
                <p>@Rhine</p>
              </div>
              <div className="flex items-center space-x-3 pl-7">
                <Twitter />
                <h5 className="text-sm font-bold text-black md:text-xl">
                  Twitter :
                </h5>
                <p>@Rhine</p>
              </div>
              <div className="flex items-center space-x-3 pl-7">
                <Instagram />
                <h5 className="text-sm font-bold text-black md:text-xl">
                  Instagram :
                </h5>
                <p>@Rhine</p>
              </div>
              <div className="flex items-center space-x-3 pl-7">
                <Tiktok />
                <h5 className="text-sm font-bold text-black md:text-xl">
                  Tiktok :
                </h5>
                <p>@Rhine</p>
              </div>
              <div className="flex items-center space-x-3 pl-7">
                <Linkedin />
                <h5 className="text-sm font-bold text-black md:text-xl">
                  Linkedin :
                </h5>
                <p>@Rhine</p>
              </div>
              <div className="flex items-center space-x-3 pl-7">
                <Pinterest />
                <h5 className="text-sm font-bold text-black md:text-xl">
                  Pinterest :
                </h5>
                <p>@Rhine</p>
              </div>
              <div className="flex items-center space-x-3 pl-7">
                <Telegram />
                <h5 className="text-sm font-bold text-black md:text-xl">
                  Telegram :
                </h5>
                <p>@Rhine</p>
              </div>
              <div className="flex items-center space-x-3 pl-7">
                <Snapchat />
                <h5 className="text-sm font-bold text-black md:text-xl">
                  Snapchat :
                </h5>
                <p>@Rhine</p>
              </div>
              <div className="flex items-center space-x-3 pl-7">
                <Youtube />
                <h5 className="text-sm font-bold text-black md:text-xl">
                  Youtube :
                </h5>
                <p>@Rhine</p>
              </div>
              <div className="flex items-center space-x-3 pl-7">
                <Github />
                <h5 className="text-sm font-bold text-black md:text-xl">
                  Github :
                </h5>
                <p>@Rhine</p>
              </div>
              <div className="flex items-center space-x-3 pl-7">
                <Dribble />
                <h5 className="text-sm font-bold text-black md:text-xl">
                  Dribble :
                </h5>
                <p>@Rhine</p>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-2 text-sm lg:text-2xl md:text-xl">
              <div className="flex items-center space-x-2 text-black">
                <FontAwesomeIcon
                  icon={faBook}
                  className="w-3 h-3 lg:h-5 lg:w-5 md:h-4 md:w-4"
                />
                <h4 className="font-bold"> Introduction : </h4>
              </div>
              <div className="flex items-center space-x-3 pl-7">
                <p className="text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                  pariatur aperiam impedit ut eveniet accusamus repellendus
                  numquam ex non repellat enim ullam, recusandae perferendis
                  animi molestiae eligendi. Fugiat, accusamus suscipit.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-sm lg:text-2xl md:text-xl">
              <div className="flex items-center space-x-2 text-black">
                <FontAwesomeIcon
                  icon={faUserClock}
                  className="w-3 h-3 lg:h-5 lg:w-5 md:h-4 md:w-4"
                />
                <h4 className="font-bold"> No. Of years of Experience : </h4>
              </div>
              <p className="normal-case">03</p>
            </div>
            <div className="flex items-center space-x-3 text-sm lg:text-2xl md:text-xl">
              <div className="flex items-center space-x-2 text-black">
                <FontAwesomeIcon
                  icon={faListCheck}
                  className="w-3 h-3 lg:h-5 lg:w-5 md:h-4 md:w-4"
                />
                <h4 className="font-bold"> No. Of Accomplishments : </h4>
              </div>
              <p className="normal-case">23</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditPage;
