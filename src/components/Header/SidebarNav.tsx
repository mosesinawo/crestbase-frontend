import React, { FC } from "react";
import {
  AppDownloadLink,
  HeaderLogo,
  MobileHeaderMenuIcon,
  SidebarContent,
  SidebarDownloadLink,
  SidebarHeader,
  SidebarLinks,
  SidebarMenu,
} from "./Header.styled";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

interface SidebarProps {
  isSidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
  faqsRef: React.RefObject<HTMLDivElement>;
}

const SidebarNav: FC<SidebarProps> = ({
  isSidebarOpen,
  setSidebarOpen,
  faqsRef,
}) => {
  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      handleSidebarToggle();
    }
  };

  const router = useRouter();
  const handleDownloadLinkClick = () => {
    router.push("/comingsoon"); // Navigate to the specified page
  };

  return (
    <SidebarMenu className={isSidebarOpen ? "open" : ""}>
      <SidebarHeader>
        <Link href="/">
          <HeaderLogo src="/images/crestbase-logo-footer.svg" alt="" />
        </Link>
        <MobileHeaderMenuIcon onClick={handleSidebarToggle}>
          <AiOutlineClose size={20} color="#262C55" strokeWidth={0.7} />
        </MobileHeaderMenuIcon>
      </SidebarHeader>
      <SidebarContent>
        <SidebarLinks onClick={() => handleScrollToSection(faqsRef)}>
          Contact Us
        </SidebarLinks>
        <SidebarDownloadLink>
          <AppDownloadLink
            onClick={handleDownloadLinkClick}
            src="/images/playstore-side.svg"
          />
          <AppDownloadLink
            onClick={handleDownloadLinkClick}
            src="/images/apple-side.svg"
          />
        </SidebarDownloadLink>
      </SidebarContent>
    </SidebarMenu>
  );
};

export default SidebarNav;
