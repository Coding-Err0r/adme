"use client";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { SelectPicker } from "rsuite";

const SocialMedia = ({ data, setData }: any) => {
  const [formFields, setFormFields] = useState([{ title: "", link: "" }]);
  const [addrtype, setAddrtype] = useState([
    "SELECT PLATFORM",
    "facebook",
    "twitter",
    "instagram",
    "tiktok",
    "linedin",
    "pinterest",
    "telegram",
    "snapchat",
    "youtube",
    "github",
    "dribble",
  ]);
  const Add = addrtype.map((Add) => Add);
  const handleFormChange = (event: any, index: number) => {
    let formData: any = [...formFields];
    formData[index][event.target.name] = event.target.value;
    setData({ ...data, socialMedia: formData });
  };

  const addFields = () => {
    let object = {
      title: "",
      link: "",
    };

    setFormFields([...formFields, object]);
  };
  const removeFields = (index: number) => {
    let formData = [...formFields];
    formData.splice(index, 1);
    setData({ ...data, socialMedia: formData });
  };

  return (
    <div className="flex flex-col space-y-2">
      {formFields.map((form, index) => {
        return (
          <div key={index} className="flex items-center space-x-2">
            <button onClick={addFields}>
              <FontAwesomeIcon
                icon={faPlus}
                className="w-3 h-3 p-1 text-white bg-green-500 rounded-full"
              />
            </button>
            <select
              className="w-full h-10 font-semibold text-center"
              onChange={(event) => handleFormChange(event, index)}
              name="title"
            >
              {Add.map((address: string, index: number) => (
                <option
                  value={address}
                  key={index}
                  selected={index === 0 ? true : false}
                >
                  {address.toUpperCase()}
                </option>
              ))}
            </select>
            <input
              className="w-full bp5-input bp5-large bp5-intent-primary "
              type="text"
              placeholder="Social media link"
              dir="auto"
              name="link"
              onChange={(event) => handleFormChange(event, index)}
            />
            <button onClick={() => removeFields(index)}>
              <FontAwesomeIcon
                icon={faMinus}
                className="w-3 h-3 p-1 text-white bg-red-500 rounded-full"
              />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SocialMedia;
