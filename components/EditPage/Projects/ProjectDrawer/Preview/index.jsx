import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Preview = ({ imagesPreviewUrls, deleteImage }) => {
  const [previewImages, setPreviewImages] = useState([]);
  const [dragId, setDragId] = useState("");

  const deleteImages = (id) => {
    deleteImage(id);
  };
  const handleOver = (ev) => {
    ev.preventDefault();
  };

  const handleDrag = (ev) => {
    setDragId(ev.currentTarget.id);
  };

  const handleDrop = (ev) => {
    ev.preventDefault();
    const dragImage = previewImages.find((image) => image.id == dragId);
    const dropImage = previewImages.find(
      (image) => image.id == ev.currentTarget.id
    );
    const arr = moveItem(dragImage.id - 1, dropImage.id - 1);
    setPreviewImages([...arr]);
  };

  const moveItem = (from, to) => {
    const f = previewImages.splice(from, 1)[0];
    previewImages.splice(to, 0, f);
    return previewImages;
  };

  useEffect(() => {
    setPreviewImages(imagesPreviewUrls);
  }, [imagesPreviewUrls]);

  useEffect(() => {
    if (previewImages.length > 0) {
      previewImages.map((items, index) => {
        items.id = index + 1;
      });
    }
  }, [previewImages]);
  console.log("Array Update ", previewImages);
  return (
    <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-4">
      {previewImages.length > 0 &&
        previewImages.map((element, index) => (
          <div
            className="md:w-[140px] md:h-[100px] flex items-start space-x-1 hover:shadow-2xl w-[100px] h-[80px] cursor-move"
            key={index}
            id={element.id}
            draggable
            onDragOver={(e) => handleOver(e)}
            onDragStart={(e) => handleDrag(e)}
            onDrop={(e) => handleDrop(e)}
          >
            <img
              src={element.file}
              alt={element.name}
              className="object-cover w-full h-full rounded-lg "
            />

            <div className="desc">
              <div className="image-order">
                <FontAwesomeIcon
                  className="text-red-500"
                  onClick={() => deleteImages(element.id)}
                  icon={faTrash}
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Preview;
