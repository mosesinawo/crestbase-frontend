import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  AppDownloadLink,
  HeaderContainer,
  HeaderLink,
  HeaderLinkWrapper,
  HeaderLinksContainer,
  HeaderLogo,
  MobileHeaderMenuIcon,
} from "./Header.styled";
import SidebarNav from "./SidebarNav";
import Link from "next/link";
import { useRouter } from "next/router";

interface MobileHeaderProps {
  color:string
  faqsRef?: React.RefObject<HTMLDivElement> | unknown;
}

const TempHeader: React.FC<MobileHeaderProps> = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const router = useRouter();

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setSidebarOpen(false); // Close the sidebar after clicking a link
    }
  };

  const handleDownloadLinkClick = () => {
    router.push("/comingsoon"); // Navigate to the specified page
  };

  return (
    <HeaderContainer style={{backgroundColor:`#fff`}}>
      <Link href="#">
        <HeaderLogo src="/images/crestbase-logo.svg" alt="" />
      </Link>
      <MobileHeaderMenuIcon onClick={handleSidebarToggle}>
        <HiOutlineMenuAlt4 size={40} color="#262C55" strokeWidth={0.7} />
      </MobileHeaderMenuIcon>
      <SidebarNav
        faqsRef={""}
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <HeaderLinksContainer>
        <div className="d-flex gap-3">
          <AppDownloadLink
            src="/images/playstore.svg"
            onClick={handleDownloadLinkClick}
          />
          <AppDownloadLink
            src="/images/apple-store.svg"
            onClick={handleDownloadLinkClick}
          />
        </div>
      </HeaderLinksContainer>
    </HeaderContainer>
  );
};

export default TempHeader;
