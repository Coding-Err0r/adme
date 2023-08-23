import React, { Component, useEffect, useState } from "react";
import Preview from "../Preview";
import Uploader from "../Uploader";

const ImageDnD = () => {
  const [imagesPreviewUrls, setImagesPreviewUrls] = useState([]);

  const imagesPreviewUrl = (result) => {
    setImagesPreviewUrls((imagesPreviewUrls) => [...imagesPreviewUrls, result]);
  };
  const deleteImage = (id) => {
    if (imagesPreviewUrls.length > 0) {
      const filterImages = imagesPreviewUrls.filter(
        (image, index) => image.id !== id
      );
      setImagesPreviewUrls(filterImages);
    }
  };

  useEffect(() => {
    imagesPreviewUrls.forEach((item, i) => {
      item.id = i + 1;
    });
  }, [imagesPreviewUrls]);

  return (
    <div>
      <Uploader imagesPreviewUrl={imagesPreviewUrl} />
      {imagesPreviewUrls.length > 0 ? (
        <Preview
          imagesPreviewUrls={imagesPreviewUrls}
          deleteImage={deleteImage}
        />
      ) : null}
    </div>
  );
};

export default ImageDnD;
