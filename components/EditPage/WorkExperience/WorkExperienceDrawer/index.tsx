"use client";
import React, { useEffect, useState } from "react";
import { Checkbox, DatePicker, Drawer } from "rsuite";

const WorkExperienceDrawer = () => {
  const [data, setData] = useState<any>({
    companyName: "",
    position: "",
    startingDate: "",
    endDate: "",
    description: "",
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
      setData({ ...data, endDate: "Present" });
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
        className="pl-6"
      >
        <Drawer.Header>
          <Drawer.Title className="text-2xl font-semibold">
            Work Experiecne Information
          </Drawer.Title>
        </Drawer.Header>
        <Drawer.Body className="flex flex-col items-start w-full space-y-6 ">
          <h5 className="text-xl text-black">
            Please fill out the information below
          </h5>
          <form className="flex flex-col items-center w-full space-y-6 ">
            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> Company Name</label>
              <input
                className="w-full bp5-input bp5-large bp5-intent-primary"
                type="text"
                placeholder="Company Name"
                dir="auto"
                onChange={(e) =>
                  setData({ ...data, companyName: e.target.value })
                }
              />
              <span className="text-xs">
                Please enter the name of the company.
              </span>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> Position Title</label>
              <input
                className="w-full bp5-input bp5-large bp5-intent-primary"
                type="text"
                placeholder="Position Title"
                dir="auto"
                onChange={(e) => setData({ ...data, position: e.target.value })}
              />
              <span className="text-xs">
                Please enter the position title that you held/hold at this
                company.
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
                Please enter the date when you started working for this compay.
              </span>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> End Date</label>
              <DatePicker
                disabled={present === true ? true : false}
                onChange={(e) =>
                  setData({ ...data, endDate: e?.toDateString() })
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
                Please enter the date when you left the company.
              </span>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> Description </label>
              <textarea
                className="w-full bp5-input bp5-large bp5-intent-primary"
                placeholder="Description"
                dir="auto"
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
              />
              <span className="text-xs">
                Please enter the a brief description of this position.
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

export default WorkExperienceDrawer;
