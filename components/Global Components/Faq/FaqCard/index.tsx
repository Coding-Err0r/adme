import { toggleFaqCardOpen } from "@/redux/FaqSlice";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
type Props = {
  question: string;
  answer: string;
  id: number;
};
const FaqCard = ({ question, answer, id }: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const dispatch = useDispatch();
  const faq = useSelector((state: any) => state.faq);

  return (
    <div className="relative z-10 w-full bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between p-6 ">
        <div className="flex flex-col items-start space-y-1">
          <p className="text-base font-semibold text-gray-800 lg:text-2xl md:text-xl">
            {question}
          </p>
          {faq.id === id && active === true ? (
            <p className="py-2 text-sm text-gray-600 lg:text-xl font-base md:text-lg">
              {answer}
            </p>
          ) : null}
        </div>
        <button
          onClick={() => {
            setActive(!active);
            dispatch(toggleFaqCardOpen<any>({ isOpen: !active, id: id }));
          }}
        >
          {faq.id === id && active === true ? (
            <FontAwesomeIcon
              icon={faMinus}
              className="py-[2px] px-[3px] border-2 border-black rounded-full"
            />
          ) : (
            <FontAwesomeIcon
              icon={faPlus}
              className="py-[2px] px-[3px] border-2 border-black rounded-full"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default FaqCard;
