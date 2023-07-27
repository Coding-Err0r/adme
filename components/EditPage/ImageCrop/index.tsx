"use client";
import { Button, Dialog, DialogBody, DialogFooter } from "@blueprintjs/core";
import { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import "./style.css";
import images from "@/config/images";

const ImageCrop = () => {
  const [src, setSrc] = useState<any>(null);
  const [crop, setCrop] = useState<any>({ aspect: 16 / 9 });
  const [image, setImage] = useState<any>(null);
  const [output, setOutput] = useState<any>(null);
  const [open, setOpen] = useState<boolean>(false);
  const selectImage = (file: any) => {
    setSrc(URL.createObjectURL(file));
    setOpen(true);
  };

  const cropImageNow = () => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx: any = canvas.getContext("2d");

    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    // Converting to base64
    const base64Image = canvas.toDataURL("image/jpeg");
    console.log(base64Image);
    setOpen(false);
    setOutput(base64Image);
  };

  return (
    <div>
      <div className="md:w-[150px] md:h-[150px] w-[300px] h-[300px]">
        <div className="relative md:w-[150px] md:h-[150px] w-[300px] h-[300px]">
          <img
            className="absolute rounded-lg md:w-[150px] md:h-[150px] w-[300px] h-[300px]"
            src={output !== null ? output : images.user}
            alt=""
          />
          <div className="flex items-center justify-center transition duration-500 rounded-lg cursor-pointer md:w-[150px] md:h-[150px] w-[300px] h-[300px] group hover:bg-gray-200 opacity-60">
            <label htmlFor="fileInput">
              <img
                id="icon"
                src="https://www.svgrepo.com/show/33565/upload.svg"
                className="hidden w-12 h-12 bg-transparent group-hover:block"
              />
            </label>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={(e: any) => {
                selectImage(e.target.files[0]);
              }}
            />
          </div>
        </div>
      </div>

      <Dialog
        title="Edit Profile Picture"
        isOpen={open}
        className="w-[90%]"
        onClose={() => setOpen(false)}
      >
        <DialogBody className="flex items-center justify-center">
          {src && (
            <ReactCrop
              src={src}
              onImageLoaded={setImage}
              crop={crop}
              onChange={setCrop}
            />
          )}
        </DialogBody>
        <DialogFooter
          actions={
            <>
              <Button intent="success" text="Crop" onClick={cropImageNow} />
              <Button
                intent="primary"
                text="Close"
                onClick={() => setOpen(false)}
              />
            </>
          }
        />
      </Dialog>
    </div>
  );
};

export default ImageCrop;
