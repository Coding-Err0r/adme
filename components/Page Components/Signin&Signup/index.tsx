"use client";
import images from "@/config/images";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/utils/firebase";
import { redirect, useParams } from "next/navigation";
import { Checkbox } from "rsuite";
import SignupComponent from "./SignupComponent";
import SigninComponent from "./SigninComponent";

const SignInSignUp = () => {
  const [toggleSigninSignup, setToggleSigninSignup] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const params = useParams();
  const SignInSignUpState = [
    {
      title: "Login to Your Account.",
      message: "Don't have an account?",
      toggleBtn: "Sign Up",
      submitBtn: "Sign In",
      checkbox: "Remember me",
    },
    {
      title: "Create your account.",
      message: "Already have an account?",
      toggleBtn: "Sign In",
      submitBtn: "Sign Up ",
      checkbox: "I agree to the terms and condition",
    },
  ];

  useEffect(() => {
    if (params.id !== null && params.id == "login") {
      setToggleSigninSignup(true);
    }
    if (params.id !== null && params.id == "signup") {
      setToggleSigninSignup(false);
    }
  }, []);
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
    <section className="relative grid w-full h-full bg-gray-200 lg:fixed place-items-center ">
      <div className="w-full h-full lg:max-w-screen-xl ">
        <div className="flex flex-col items-center justify-center w-full h-full ">
          <div className="w-full h-screen mt-16 lg:p-4 md:mt-0 md:p-28">
            <div className="relative flex items-center justify-center h-full md:bottom-0">
              <div className="flex bg-white   md:rounded-[30px] shadow-xl lg:h-[45rem] absolute z-10 w-full h-[42rem] md:rounded-t-0 rounded-t-[30px] xl:w-[85.375rem]  bottom-0 md:relative">
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

                  <div className="flex flex-col lg:w-[75%] md:p-4 md:text-base text-gray-500   relative z-10  md:w-[70%] p-8  w-full text-sm">
                    <div className="flex flex-col items-center py-4 space-y-2 lg:py-0">
                      <img src={images.logoTwo} className="h-12 my-2" />
                      <h1 className="text-xl text-black md:text-2xl">
                        {toggleSigninSignup === true
                          ? SignInSignUpState[0].title
                          : SignInSignUpState[1].title}
                      </h1>
                      <p>
                        {toggleSigninSignup === true
                          ? SignInSignUpState[0].message
                          : SignInSignUpState[1].message}
                        <button
                          className="text-blue-600 focus:outline-none"
                          onClick={() =>
                            setToggleSigninSignup(!toggleSigninSignup)
                          }
                        >
                          <strong>
                            {toggleSigninSignup === true
                              ? SignInSignUpState[0].toggleBtn
                              : SignInSignUpState[1].toggleBtn}
                          </strong>
                        </button>
                      </p>
                    </div>
                    {toggleSigninSignup === true ? (
                      <SigninComponent />
                    ) : (
                      <SignupComponent />
                    )}

                    <div className="flex items-center justify-between">
                      <div className="-mt-4 -ml-2">
                        <Checkbox>
                          {" "}
                          {toggleSigninSignup === true
                            ? SignInSignUpState[0].checkbox
                            : SignInSignUpState[1].checkbox}
                        </Checkbox>
                      </div>
                      <div className="-mt-4 -ml-2">
                        <a
                          href="#"
                          className="text-blue-500 hover:no-underline hover:text-blue-700 focus:outline-none focus:text-blue-700"
                        >
                          {" "}
                          {toggleSigninSignup === true
                            ? "Forgot Password"
                            : null}
                        </a>
                      </div>
                    </div>
                    <button className="w-full p-2 text-2xl text-white rounded-full bg-gradient-to-l from-cyan-300 via-sky-600 to-indigo-500">
                      {toggleSigninSignup === true
                        ? SignInSignUpState[0].submitBtn
                        : SignInSignUpState[1].submitBtn}
                    </button>
                    <section className="relative flex items-center mt-2">
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

export default SignInSignUp;
