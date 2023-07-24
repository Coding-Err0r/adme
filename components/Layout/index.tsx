"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Loader from "../Loader";
import { Provider } from "react-redux";
import { store } from "@/redux/Store";

const Layout = ({ children }: any) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading === true) {
    return <Loader />;
  } else {
    return (
      <>
        <Provider store={store}>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </>
    );
  }
};

export default Layout;
