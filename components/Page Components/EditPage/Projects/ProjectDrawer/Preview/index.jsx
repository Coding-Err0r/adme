import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
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

  console.log("Array Update ", previewImages);
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
                        <div className=" md:h-[100px] flex items-center space-x-1 hover:border-2 rounded-lg h-[80px] cursor-move justify-between md:w-[60%] p-2 hover:border-cyan-400 w-full">
                          <img
                            src={element.file}
                            alt={element.name}
                            className="object-cover w-[100px] h-full rounded-lg md:w-[140px]"
                          />

                          <p className="text-2xl font-bold text-gray-500">
                            {element.id}
                          </p>
                          {index === 0 ? (
                            <p className="mt-1 text-xl font-bold text-blue-600">
                              Primary
                            </p>
                          ) : null}
                          <FontAwesomeIcon
                            className="p-1 text-white bg-red-500 rounded-full cursor-pointer"
                            onClick={() => deleteImages(element.id)}
                            icon={faMinus}
                          />
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
