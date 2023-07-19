import images from "@/config/images";
import Image from "next/image";
import React from "react";
import Whatsapp from "../SVGs/Whatsapp";
import Messenger from "../SVGs/Messenger";

const FloadingButton = () => {
  return (
    <section className="fixed z-10 hidden bottom-12 right-12 md:block lg:block">
      <div className="flex flex-col items-center space-y-3 ">
        <Whatsapp />
        <Messenger />
      </div>
    </section>
  );
};

export default FloadingButton;
