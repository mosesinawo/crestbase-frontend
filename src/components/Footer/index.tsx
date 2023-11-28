import React from "react";
import {
  CrestbaseInfoContainer,
  DownloadButtons,
  FooterContainer,
  FooterDownloadContainerText,
  FooterDownloadContainer,
  LinkChild,
  LinkHeader,
  LinksContainer,
  OrientationContainer,
  OtherLinksContainer,
  AppStoreButton,
  PlayStoreButton,
  FooterImage,
  FooterAddress,
  FooterEmail,
  FooterCopyrightContainer,
  CopyrightText,
  ImageLink,
  PolicyContainer,
} from "./Footer.styled";

import { BsDot } from "react-icons/bs";
import Link from "next/link";

const index = () => {
  return (
    <FooterContainer>
      <OrientationContainer>
        <CrestbaseInfoContainer>
          <Link href="/">
            <FooterImage src="/images/crestbase-logo-footer.svg" />
          </Link>
        </CrestbaseInfoContainer>
        <OtherLinksContainer>
          <LinksContainer>
            <Link href="https://twitter.com/mycrestbase">
              <ImageLink src="/images/twitter-link.svg" />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100080107781956&mibextid=LQQJ4d">
            <ImageLink src="/images/facebook-link.svg" />
            </Link>
            <Link href="https://instagram.com/mycrestbase?igshid=YTQwZjQ0NmI0OA==">
            <ImageLink src="/images/instagram-link.svg" />{" "}
            </Link>
            <Link href="https://www.linkedin.com/company/crestbase">
            <ImageLink src="/images/LinkedIn-link.svg" />
            </Link>
          </LinksContainer>
        </OtherLinksContainer>
      </OrientationContainer>
      <FooterCopyrightContainer>
        <PolicyContainer>
          <LinkChild>Terms of Use</LinkChild>
          <BsDot size={17} color="#262C55" />
          <LinkChild>Privacy Policy</LinkChild>
        </PolicyContainer>
        <CopyrightText>Copyright @Crestbase, 2023</CopyrightText>
      </FooterCopyrightContainer>
    </FooterContainer>
  );
};

export default index;
