import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";
import EmptyHeader from "@/components/Header/EmptyHeader";
import MobileHeader from "@/components/Header/MobileHeader";
import React, { useRef } from "react";


const ComingSoonPage: React.FC = () => {
  const faqsRef = useRef<HTMLDivElement>(null);
  return (
    <>
       <MobileHeader
        color="#fff"
        faqsRef={faqsRef}
      />
      <ComingSoon />
      <Footer />
    </>
  );
};

export default ComingSoonPage;
