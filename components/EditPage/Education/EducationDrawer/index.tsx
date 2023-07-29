"use client";
import React, { useEffect, useState } from "react";
import { Checkbox, DatePicker, Drawer } from "rsuite";

const EducationDrawer = () => {
  const [data, setData] = useState<any>({
    institutionName: "",
    subjectName: "",
    startingDate: "",
    graduationDate: "",
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(false);
  const [present, setPresent] = useState<boolean>(false);
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
  useEffect(() => {
    if (present === true) {
      setData({ ...data, graduationDate: "Present" });
    }
  }, [present]);

  return (
    <div>
      <button
        className="py-2 text-sm text-white rounded-lg cursor-pointer bg-sky-600 md:text-xl px-7 hover:bg-sky-800"
        onClick={() => setIsOpen(true)}
      >
        Add
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
            Education Information
          </Drawer.Title>
        </Drawer.Header>
        <Drawer.Body className="flex flex-col items-start w-full space-y-6 ">
          <h5 className="text-xl text-black">
            Please fill out the information below
          </h5>

          <form className="flex flex-col items-center w-full space-y-6 ">
            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> Institution Name</label>
              <input
                className="w-full bp5-input bp5-large bp5-intent-primary"
                type="text"
                placeholder="Institution Name"
                dir="auto"
                onChange={(e) =>
                  setData({ ...data, institutionName: e.target.value })
                }
              />
              <span className="text-xs">
                Please enter you educational institution name as it appears in
                certificate.
              </span>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> Subject Title</label>
              <input
                className="w-full bp5-input bp5-large bp5-intent-primary"
                type="text"
                placeholder="Subject Name"
                dir="auto"
                onChange={(e) =>
                  setData({ ...data, subjectName: e.target.value })
                }
              />
              <span className="text-xs">
                Please enter you subject title as it appears in certificate.
              </span>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> Starting Date</label>
              <DatePicker
                onChange={(e) =>
                  setData({ ...data, startingDate: e?.toDateString() })
                }
              />
              <span className="text-xs">
                Please enter the date when you joined this educational
                institution.
              </span>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> Graduation Date</label>
              <DatePicker
                disabled={present === true ? true : false}
                onChange={(e) =>
                  setData({ ...data, graduationDate: e?.toDateString() })
                }
              />
              <Checkbox
                onChange={(value, checked, e) => {
                  checked ? setPresent(true) : setPresent(false);
                }}
              >
                {" "}
                Present
              </Checkbox>
              <span className="text-xs">
                Please enter the date when you grduated from this educational
                institution.
              </span>
            </div>
            <button
              type="button"
              className="rounded-full bp5-button bp5-icon-add bp5-intent-success bp5-large"
            >
              Add
            </button>
          </form>
        </Drawer.Body>
      </Drawer>
    </div>
  );
};

export default EducationDrawer;
