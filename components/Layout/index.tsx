"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Loader from "../Loader";

const Layout = ({ children }: any) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  if (loading === true) {
    return <Loader />;
  } else {
    return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    );
  }
};

export default Layout;
