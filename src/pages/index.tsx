import Head from "next/head";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import MobileHeader from "@/components/Header/MobileHeader";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";
import { useRef } from "react";
import DownloadGlassContainer from "@/components/Assets/DownloadGlassContainer";

const Home: React.FC = () => {
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const whatWeOfferRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const assetsRef = useRef<HTMLDivElement>(null);

  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>Endless real estate possibilities</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
      </Head>
      <MobileHeader
        faqsRef={faqsRef}
        color="#EDF3F7"
      />
      <HeroSection />
      <DownloadGlassContainer />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
