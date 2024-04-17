"use client";

import React, { PropsWithChildren } from "react";

// import { useUser } from "@auth0/nextjs-auth0/client";
import Navbar from "./navbar";
import Loading from "./loading";
import Footer from "./footer";

export const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  // const { isLoading } = useUser();

  // if (isLoading) {
  //   return (
  //     <div className="page-layout">
  //       <Loading />
  //     </div>
  //   );
  // }

  return (
    <div className="page-layout">
      <Navbar />
      <div className="page-layout__content">{children}</div>
      <Footer />
    </div>
  );
};