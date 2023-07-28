"use client";
import { Button, Popover, Whisper } from "rsuite";
import BookIcon from "../../SVGIcons/BookIcon";

interface Props {
  text: string;
  list: string[];
}

const TipsMobile = ({ text, list }: Props) => {
  const speaker = (
    <Popover className="w-[85%]">
      <div className="flex flex-col items-start p-4 space-y-2 md:p-8">
        <h1 className="text-[18px] font-bold text-black ">Tips</h1>
        <p className="text-[15px]">{text} :</p>
        <ul className="space-y-3 text-[15px] list-disc ml-4 lg:py-6">
          {list.length > 0 &&
            list.map((item: any, index: number) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </Popover>
  );
  return (
    <div className="block float-right -mt-8 md:block lg:hidden xl:hidden 2xl:hidden">
      <Whisper
        placement="topEnd"
        trigger="click"
        controlId="control-id-click"
        speaker={speaker}
      >
        <Button>
          <BookIcon />
        </Button>
      </Whisper>
    </div>
  );
};

export default TipsMobile;
