import { device } from "@/styles/global.styles";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  background: #ffffff;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OrientationContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const CrestbaseInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media ${device.tablet} {
    width: 30%;
  }
`;

const FooterImage = styled.img``;

const FooterAddress = styled.p`
  font-family: "DM Sans";
  font-size: 18px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0px;
  text-align: left;
  color: #262c55;
  width: 243px;
  padding-top: 46px;
`;

const FooterEmail = styled.p`
  font-family: "Lato";
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: #262c55;
  padding-top: 24px;
`;

const OtherLinksContainer = styled.div`
  display: flex;
  width: max-content;
  justify-items: center;
  margin-top: 50px;
  align-items: start;
  justify-items: start;
  @media ${device.tablet} {
    margin-top: 5px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: flex-start;
  justify-content: center;
`;

const LinkHeader = styled.p`
  font-family: "DM Sans";
  font-size: 16px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: #262c55;
  padding-bottom: 27px;
`;

const LinkChild = styled.p`
  font-family: "DM Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: #262c55;
`;

const ImageLink = styled.img`
  width: 32px;
  height: auto;
`;

const FooterDownloadContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  padding: 23px 20px;
  border-radius: 20px;
  background-color: #3d79ef;
  width: 60%;
  margin-top: 20px;
  max-width: 300px;
  @media ${device.tablet} {
    width: 20%;
    margin-top: 0;
  }
`;

const FooterDownloadContainerText = styled.p`
  font-family: "DM Sans";
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;

const DownloadButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 1rem 0;
`;

const AppStoreButton = styled.img`
  width: 92%;
  height: 100%;
  max-width: 167px;
`;

const PlayStoreButton = styled.img`
  width: 90%;
  height: 100%;
  max-width: 160px;
`;

const FooterCopyrightContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 39px 0;
  border-top: 1px solid #011b3366;
  margin-top: 50px;
  gap: 18px;
  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const PolicyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

const CopyrightText = styled.p`
  font-family: "DM Sans";
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  color: #262c55;
`;

export {
  FooterContainer,
  OrientationContainer,
  CrestbaseInfoContainer,
  FooterImage,
  FooterAddress,
  FooterEmail,
  OtherLinksContainer,
  LinksContainer,
  LinkHeader,
  LinkChild,
  ImageLink,
  FooterDownloadContainer,
  FooterDownloadContainerText,
  DownloadButtons,
  AppStoreButton,
  PlayStoreButton,
  FooterCopyrightContainer,
  PolicyContainer,
  CopyrightText,
};
