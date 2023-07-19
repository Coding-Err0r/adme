"use client";
import React, { Suspense, useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Loader from "../Loader";
import Loading from "./loading";

const Layout = ({ children }: any) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);


    return (
      <Suspense fallback={<Loading />}>
        <Navbar />
        {children}
        <Footer />
      </Suspense>
    );
  
};

export default Layout;
