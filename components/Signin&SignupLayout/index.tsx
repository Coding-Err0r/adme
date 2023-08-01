import images from "@/config/images";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  title: string;
  message: string;
  redirectTitle: string;
  redirectUrl: string;
  children: React.ReactNode;
}

const SignInSignUpLayout = ({
  title,
  message,
  redirectTitle,
  redirectUrl,
  children,
}: Props) => {
  return (
    <section className="w-full h-screen bg-gray-200">
      <div className="flex flex-col items-center w-full h-full">
        <div className="w-full h-full mt-24 md:mt-14">
          <div className="flex items-center justify-center h-full bottom-[-4rem] relative md:bottom-0">
            <div className="flex bg-white  lg:w-[100rem] md:rounded-[30px] shadow-xl md:w-[80%]  lg:h-[60rem] relative z-10 w-full h-[55rem] md:rounded-t-0 rounded-t-[30px]">
              <div className="relative flex flex-col w-full h-full overflow-hidden lg:rounded-l-[30px] items-center justify-center md:rounded-[30px] lg:rounded-none">
                <img
                  src={images.frame3}
                  alt=""
                  className="absolute h-52 lg:top-[-10px] lg:left-[-155px] -rotate-[19deg] md:top-[-45px] md:left-[-160px] md:block lg:block hidden"
                />
                <div className="absolute z-20 flex items-center text-sm text-black md:text-lg top-5 right-5">
                  <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-3" />
                  <a
                    href="/"
                    className="text-black hover:no-underline hover:text-blue-500"
                  >
                    Go back to home
                  </a>
                </div>

                <div className="flex flex-col lg:w-[68%] md:p-4 md:text-lg text-gray-500  lg:space-y-5 relative z-10  md:w-[70%] p-8 space-y-3 w-full text-base">
                  <div className="flex flex-col items-center py-4 space-y-2 lg:py-0">
                    <img
                      src={images.logoTwo}
                      className="h-12 lg:my-5 lg:h-16 lg:w-60 md:h-14 md:w-52"
                    />
                    <h1 className="text-2xl text-black lg:text-4xl md:text-3xl">
                      {title}
                    </h1>
                    <p>
                      {message}
                      <a href={redirectUrl} className="text-blue-600">
                        <strong>{redirectTitle}</strong>
                      </a>
                    </p>
                  </div>

                  {children}
                  <section className="relative flex items-center ">
                    <div className="flex-grow border-t border-gray-500" />
                    <strong className="px-4">Or</strong>
                    <div className="flex-grow border-t border-gray-500" />
                  </section>
                  <div className="flex items-center justify-center space-x-8">
                    <a className="w-12 h-12 p-3 bg-white shadow-xl rounded-xl ">
                      <img
                        src={images.social3}
                        className="object-cover w-full h-full"
                      />
                    </a>
                    <a className="w-12 h-12 p-3 bg-white shadow-xl rounded-xl ">
                      <img
                        src={images.social2}
                        className="object-cover w-full h-full"
                      />
                    </a>
                    <a className="w-12 h-12 p-3 bg-white shadow-xl rounded-xl ">
                      <img
                        src={images.social1}
                        className="object-cover w-full h-full"
                      />
                    </a>
                  </div>
                </div>
                <img
                  src={images.frame2}
                  alt=""
                  className="absolute md:h-52 lg:bottom-[-70px] md:right-[-195px] rotate-[16deg] md:bottom-[-90px] bottom-[-50px] h-32 right-[-120px]"
                />
              </div>
              <img
                src={images.frame1}
                alt=""
                className="rounded-r-[30px] w-full h-full object-cover lg:block xl:block md:hidden hidden"
              />
            </div>
          </div>
        </div>
        <img
          src={images.frame1}
          alt=""
          className="fixed z-0 block object-cover w-full h-full lg:hidden xl:hidden md:block top-[-40%] md:top-0"
        />
      </div>
    </section>
  );
};

export default SignInSignUpLayout;
