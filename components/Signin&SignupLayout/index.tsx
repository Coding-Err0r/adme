import images from "@/config/images";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/utils/firebase";
import { redirect } from "next/navigation";

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
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      redirect("/");
    } catch (e) {
      console.log("Error", e);
    }
  };

  const facebookProvider = new FacebookAuthProvider();
  const facebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const credantial = await FacebookAuthProvider.credentialFromResult(
        result
      );
      const token = credantial?.accessToken;
      let photoUrl = result.user.photoURL + "?height=800&access_token=" + token;
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { photoURL: photoUrl });
      }
      redirect("/");
    } catch (e) {
      console.log("Error", e);
    }
  };

  return (
    <section className="relative grid w-full h-full overflow-y-auto bg-gray-200 lg:fixed place-items-center">
      <div className="w-full h-full lg:max-w-screen-xl">
        <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="w-full h-full lg:p-4 mt-24 md:mt-0 md:p-28">
          <div className="relative flex items-center justify-center h-full md:bottom-0 ">
            <div className="flex bg-white   md:rounded-[30px] shadow-xl lg:h-[720px] relative z-10 w-full h-[42rem] md:rounded-t-0 rounded-t-[30px] lg:w-[1366px]">
              <div className="relative flex flex-col w-full h-full overflow-hidden lg:rounded-l-[30px] items-center justify-center md:rounded-[30px] lg:rounded-none">
                <img
                  src={images.frame3}
                  alt=""
                  className="absolute lg:h-40 lg:top-[-30px] lg:left-[-125px] -rotate-[19deg] md:top-[-15px] md:left-[-90px] md:block lg:block hidden h-32"
                />
                <div className="absolute z-20 flex items-center text-sm text-black md:text-base top-5 right-5">
                  <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-3" />
                  <a
                    href="/"
                    className="text-black hover:no-underline hover:text-blue-500"
                  >
                    Go back to home
                  </a>
                </div>

                <div className="flex flex-col lg:w-[75%] md:p-4 md:text-base text-gray-500   relative z-10  md:w-[70%] p-8 space-y-2 w-full text-sm">
                  <div className="flex flex-col items-center py-4 space-y-2 lg:py-0">
                    <img src={images.logoTwo} className="h-12 my-2" />
                    <h1 className="text-xl text-black md:text-2xl">{title}</h1>
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
                    <div
                      className="w-12 h-12 p-3 bg-white shadow-xl cursor-pointer rounded-xl"
                      onClick={googleLogin}
                    >
                      <img
                        src={images.social3}
                        className="object-cover w-full h-full"
                        alt=""
                      />
                    </div>
                    <div
                      className="w-12 h-12 p-3 bg-white shadow-xl cursor-pointer rounded-xl"
                      onClick={facebookLogin}
                    >
                      <img
                        src={images.social2}
                        className="object-cover w-full h-full"
                      />
                    </div>
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
                  className="absolute lg:h-40 lg:bottom-[-70px] md:right-[-115px] rotate-[16deg] md:bottom-[-50px] bottom-[-40px] md:h-32 right-[-90px] lg:right-[-155px] h-24"
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
      </div>
    </section>
  );
};

export default SignInSignUpLayout;
