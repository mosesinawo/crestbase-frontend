import { device } from "@/styles/global.styles";
import styled from "styled-components";

const SectionContainer = styled.div`
  /* background-color: #ffffff; */
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 130px;
  margin: 0 auto;
  
`;

const GlassContainer = styled.div`
  background-image:url("./images/download-crest.png");
  background-repeat:no-repeat;
  background-position:center;
  background-size:cover;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  @media ${device.laptop} {
    padding-bottom:20px;
  }
  @media ${device.laptopL} {
    padding-bottom:0;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  box-sizing: border-box;
  padding: 10% 0 0 0;
  gap: 50px;
  @media ${device.mobileS} {
    flex-direction: column-reverse;
  }
  @media ${device.tablet} {
    align-items:center;
    padding: 7% 0 0 0;
    flex-direction: column-reverse;
  }
  @media ${device.laptop} {
    align-items:start;
    padding: 7% 0 0 0;
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  @media ${device.tablet} {
    width: 100%;
  }
  @media ${device.laptop} {
    width: 55%;
  }
`;

const DownloadText = styled.p`
  font-family: "Inter";
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #497ded;

  @media ${device.tablet} {
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
  }
`;

const StatisticsText = styled.p`
   font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: left;
  color: #262c55;
  padding-top: 10px;

  @media ${device.mobileS} {
    font-size: 21px;
    font-weight: 900;
    line-height: 33px;
  }
  @media ${device.tablet} {
    font-size: 30px;
    font-weight: 700;
    line-height: 46px;
  }
  @media ${device.laptop} {
    font-size: 30px;
    font-weight: 700;
    line-height: 46px;
  }
`;

const DownloadButtons = styled.form`
  display: flex;
  flex-direction: row;
margin-top: 40px;
@media ${device.mobileS} {
    font-size: 30px;
    font-weight: 900;
    line-height: 46px;
    flex-direction:column;
     gap: 20px;
  }
@media ${device.tablet} {
    font-size: 30px;
    font-weight: 900;
    line-height: 46px;
    flex-direction:column;
     gap: 20px;
  }
@media ${device.laptop} {
   flex-direction:row;
  gap: 0px;
  }
@media ${device.laptopL} {
   flex-direction:row;
   gap: 0;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  @media ${device.tablet} {
    width: 100%;
    justify-content: center;
  }
  @media ${device.laptop} {
    width: 40%;
  }
  @media ${device.laptopL} {
    width: 40%;
  }
`;

const GlassContainerImage = styled.img`
  width: auto;
  height: 100%;
  content: url("/images/crest-download-mobile.svg");
  @media ${device.mobileL} {
    /* width: 279px; */
  }
  @media ${device.laptop} {
    content: url("/images/crest-download-mobile.svg");
  }
`;

const DownloadGlassInput = styled.input`
height: 62px;
font-size:16px;
font-weight: 400;
border:1px solid #0E040480;
background-color: transparent;
width: 350px;
@media ${device.mobileS} {
  border-radius:10px;
    width: 100%;
  }
  @media ${device.tablet} {
    width:100%;
    
  }
@media ${device.laptop} {
  border-top-left-radius:10px;
border-bottom-left-radius:10px;
border-top-right-radius:unset;
border-bottom-right-radius:unset;
    
  }
&::placeholder {
   font-size: 15px;
   color: #4F4F4F;
  }
`;
const DownloadGlassBtn = styled.button`
border: none;
background-color: #262C55;
height: 62px;
color:white;
font-size: 18px;


@media ${device.mobileS} {
   border-radius:10px;
    
  }
  @media ${device.tablet} {
    width: 350px;
    padding: 0 15px;
    width:100%;
    
  }
  @media ${device.laptop} {
    width: 388px;
    padding: 0 15px;
    
  }
  @media ${device.laptop} {
    border-top-right-radius:10px;
border-bottom-right-radius:10px;
border-top-left-radius:unset;
border-bottom-left-radius:unset;
padding: 0 15px;
    
  }
`


export {
  SectionContainer,
  GlassContainer,
  ContentContainer,
  TextContainer,
  DownloadText,
  StatisticsText,
  DownloadButtons,
  ImageContainer,
  DownloadGlassBtn,
  GlassContainerImage,
  DownloadGlassInput
};
