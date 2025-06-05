import Footer from "@/components/marketing/footer";
import Navbar from "@/components/marketing/navbar";
import React from "react";
import SmoothScroll from "@/components/global/SmoothScroll";  // import it

interface Props {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
  return (
    <>
      <SmoothScroll />  {/* Add it here */}
      <Navbar />
      <main className="mx-auto w-full z-40 relative">{children}</main>
      <Footer />
    </>
  );
};

export default MarketingLayout;
