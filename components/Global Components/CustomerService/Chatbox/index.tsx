import React from "react";
import SenderText from "./SenderText";
import ReceiverText from "./ReceiverText";

const Chatbox = () => {
  return (
    <div className="w-full h-full overflow-hidden overflow-y-auto border-2 border-gray-500 border-dashed rounded-lg">
      <div
        id="messages"
        className="flex flex-col p-3 space-y-8 overflow-y-auto scrolling-touch scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2"
      >
        <SenderText text={"Hello "} />
        <ReceiverText text={"Hello sir, How can we help you ?"} />
        <SenderText text={"Can i get a custom designed card?"} />
        <ReceiverText
          text={
            "Yes sir, of course , you can get a custom design of your own . Let me connect you with our designer."
          }
        />
      </div>
    </div>
  );
};

export default Chatbox;
