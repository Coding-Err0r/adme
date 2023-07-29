import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Preview = ({ imagesPreviewUrls, deleteImage }) => {
  const [previewImages, setPreviewImages] = useState([]);
  const [dragId, setDragId] = useState("");

  const deleteImages = (id) => {
    deleteImage(id);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const newArr = Array.from(previewImages);
    const [draggedItem] = newArr.splice(result.source.index, 1);
    newArr.splice(result.destination.index, 0, draggedItem);
    setPreviewImages(newArr);
  };

  useEffect(() => {
    setPreviewImages(imagesPreviewUrls);
  }, [imagesPreviewUrls]);

  // console.log("Array Update ", previewImages);
  return (
    <div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="boxes">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="space-y-3"
            >
              {previewImages.length > 0 &&
                previewImages.map((element, index) => (
                  <Draggable
                    key={index}
                    draggableId={index.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                      >
                        <div className="md:w-[140px] md:h-[100px] flex items-start space-x-1 hover:shadow-2xl w-[100px] h-[80px] cursor-move">
                          <img
                            src={element.file}
                            alt={element.name}
                            className="object-cover w-full h-full rounded-lg "
                          />

                          <div className="desc">
                            <div className="image-order">
                              <FontAwesomeIcon
                                className="text-red-500 cursor-pointer"
                                onClick={() => deleteImages(element.id)}
                                icon={faTrash}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Preview;
