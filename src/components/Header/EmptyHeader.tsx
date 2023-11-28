import React, { useState } from "react";
import {
  AppDownloadLink,
  HeaderContainer,
  HeaderLinksContainer,
  HeaderLogo,
} from "./Header.styled";
import Link from "next/link";
import { useRouter } from "next/router";
import SidebarNav from "./SidebarNav";

const EmptyHeader = () => {
  const router = useRouter();
  const handleDownloadLinkClick = () => {
    router.push("/comingsoon"); // Navigate to the specified page
  };
  return (
    <HeaderContainer>
      <Link href="/">
        <HeaderLogo src="/images/crestbase-logo-footer.svg" alt="" />
      </Link>
      <div>
        <AppDownloadLink
          style={{ width: "100%" }}
          onClick={handleDownloadLinkClick}
          src="/images/joint-download-button.svg"
        />
      </div>
     
    </HeaderContainer>
  );
};

export default EmptyHeader;
