import React from "react";

interface Props {
  text: string;
}
const ReceiverText = ({ text }: Props) => {
  return (
    <div className="chat-message">
      <div className="flex items-end justify-end">
        <div className="flex flex-col items-end order-1 max-w-xs mx-2 space-y-2 text-xs">
          <div>
            <span className="inline-block px-6 py-3 text-sm text-black bg-gray-200 rounded-full rounded-br-none md:text-base md:py-4">
              {text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiverText;
