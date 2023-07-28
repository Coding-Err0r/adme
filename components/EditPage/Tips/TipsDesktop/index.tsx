import React from "react";
interface Props {
  text: string;
  list: string[];
}

const TipsDesktop = ({ text, list }: Props) => {
  return (
    <div className=" flex-col items-start font-light text-black font-sunflower lg:mt-[4rem] lg:px-6  lg:hidden md:hidden hidden xl:block">
      <h1 className="py-8 text-[24px] font-bold text-black ">Tips</h1>
      <p className="text-[18px]">{text} :</p>
      <ul className="space-y-3 text-[18px] list-disc  lg:ml-4 lg:py-6">
        {list.length > 0 &&
          list.map((item: any, index: number) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
};

export default TipsDesktop;
