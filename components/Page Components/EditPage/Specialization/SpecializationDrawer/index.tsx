"use client";
import React, { useEffect, useState } from "react";
import { Checkbox, DatePicker, Drawer } from "rsuite";

const SpecializationDrawer = () => {
  const [data, setData] = useState<any>({
    title: "",
    department: "",
    numberOfProjects: 0,
    description: "",
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
        className="py-2 text-sm text-white rounded-lg cursor-pointer bg-zinc-800 md:text-xl px-7 hover:bg-zinc-600"
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
            Specialization Information
          </Drawer.Title>
        </Drawer.Header>
        <Drawer.Body className="flex flex-col items-start w-full space-y-6 ">
          <h5 className="text-xl text-black">
            Please fill out the information below
          </h5>
          <form className="flex flex-col items-center w-full space-y-6 ">
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
                Please enter the name of the title.
              </span>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> Department Title</label>
              <input
                className="w-full bp5-input bp5-large bp5-intent-primary"
                type="text"
                placeholder="Department Title"
                dir="auto"
                onChange={(e) =>
                  setData({ ...data, department: e.target.value })
                }
              />
              <span className="text-xs">
                Please enter the department that you worked on.
              </span>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> Number of projects</label>
              <input
                className="w-full bp5-input bp5-large bp5-intent-primary"
                type="number"
                placeholder="Number of projects"
                dir="auto"
                onChange={(e) =>
                  setData({ ...data, numberOfProjects: e.target.value })
                }
              />
              <span className="text-xs">
                Please enter the number of projects that you worked on.
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

export default SpecializationDrawer;
