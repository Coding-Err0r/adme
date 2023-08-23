import React from "react";

interface Props {
  text: string;
}
const SenderText = ({ text }: Props) => {
  return (
    <div className="chat-message">
      <div className="flex items-end">
        <div className="flex flex-col items-start order-2 max-w-xs mx-2 space-y-2 text-xs">
          <div>
            <span className="inline-block px-6 py-3 text-sm text-white rounded-full rounded-bl-none md:text-base md:py-4 bg-violet-500">
              {text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SenderText;
