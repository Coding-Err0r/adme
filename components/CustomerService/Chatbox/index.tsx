import React from "react";
import SenderText from "./SenderText";
import ReceiverText from "./ReceiverText";

const Chatbox = () => {
  return (
    <div className="md:w-[350px] h-[440px] border-2 border-dashed border-gray-500 rounded-lg w-full overflow-hidden overflow-y-auto">
      <div
        id="messages"
        className="flex flex-col p-3 space-y-4 overflow-y-auto scrolling-touch scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2"
      >
        <SenderText text={"Hello "} />
        <ReceiverText text={"Hello sir, How can we help you ?"} />
        <SenderText text={"Hello "} />
        <ReceiverText text={"Hello sir, How can we help you ?"} />
        <SenderText text={"Hello "} />
        <ReceiverText text={"Hello sir, How can we help you ?"} />
        <SenderText text={"Hello "} />
        <ReceiverText text={"Hello sir, How can we help you ?"} />
      </div>
    </div>
  );
};

export default Chatbox;
