import React from "react";
import { Navbar } from ".";
import Footer from "./Footer";

interface PropsType {
  children: React.ReactNode;
  position?: "fixed" | "sticky" | "static";
}

const Layout = ({ children, position = "fixed" }: PropsType) => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <div className={`${position} top-0 z-10 w-full`}>
        <Navbar />
      </div>

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
