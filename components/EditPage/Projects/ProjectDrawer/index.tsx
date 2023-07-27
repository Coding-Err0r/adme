"use client";
import React, { useEffect, useState } from "react";
import { Checkbox, DatePicker, Drawer } from "rsuite";
import ImageDnD from "./ImageDnD";

const ProjectDrawer = () => {
  const [data, setData] = useState<any>({
    title: "",
    department: "",
    toolsUsed: "",
    description: "",
    images: [],
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
  console.log(data);
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
        className="pl-4"
      >
        <Drawer.Header>
          <Drawer.Title className="text-2xl font-semibold">
            Projects Information
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
              <label className="text-lg"> Used Tools</label>
              <input
                className="w-full bp5-input bp5-large bp5-intent-primary"
                type="text"
                placeholder="Used Tools"
                dir="auto"
                onChange={(e) =>
                  setData({ ...data, toolsUsed: e.target.value })
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

            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg"> Project Images</label>
              <ImageDnD data={data} setData={setData} />
              <span className="text-xs">
                Please enter the department that you worked on.
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

export default ProjectDrawer;
