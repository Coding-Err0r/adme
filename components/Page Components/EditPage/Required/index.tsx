import React from "react";
interface Props {
  message: string;
}
const Required = ({ message }: Props) => {
  return (
    <p className="text-sm font-light text-center text-black font-sunflower lg:text-xl md:text-base p-14">
      {message}
    </p>
  );
};

export default Required;
