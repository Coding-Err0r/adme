"use client";

import { useSelector } from "react-redux";

interface Props {
  items: string[];
  open: boolean;
  id: any;
}
const DropdownMenu = ({ items, open, id }: Props) => {
  const dropdown = useSelector((state: any) => state.dropdown);
  if (dropdown.id === id && open === true) {
    return (
      <ul className="w-full p-4 px-4 text-[1rem] font-medium text-white rounded-2xl bg-zinc-800 font-poppins">
        {items.map((item: any, index: number) => (
          <li key={index} className="py-2 cursor-pointer">
            <a href={item.href} className="text-white hover:no-underline"></a>
            {item.title}
            <div className="h-[1px] bg-gradient-to-l from-cyan-300 via-sky-600 to-indigo-500 mt-1" />
          </li>
        ))}
      </ul>
    );
  }
};

export default DropdownMenu;
