import { device } from "@/styles/global.styles";
import styled from "styled-components";
//import FontStyles from "@/fonts/fontStyle";

const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #EDF3F7;
  padding: 100px 15px 0 ;
  background-repeat:no-repeat;
  background-position:center;
  background-size:cover;
  /* justify-content: center; */
  align-items: center;

  background-image:url("./images/hero-bg.png");
    @media ${device.mobileS} {
      padding: 40px 0 0 0;
      background-image:url("./images/hero-mobile-bg.png");
      flex-direction: column;
      margin-right:-15px;
  }
    @media ${device.tabletL} {
      padding: 100px 0 0 0;
      flex-direction: column;
  }
    @media ${device.laptop} {
        background-image:url("./images/hero-bg.png");
      padding: 50px 0 0 0;
      flex-direction: row;
      height: 100%;
      
  }
    @media ${device.laptopL} {
        background-image:url("./images/hero-bg.png");
      padding: 0 0 0 0;
      flex-direction: row;
      height: 100%;
  }
`;

const HeroOrientationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  /* margin-top:100px; */
  @media ${device.laptop} {
    align-items: flex-start;
    flex-direction: row;
  }
`;

const HeroLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  box-sizing: border-box;
  margin-top: -1%;
  align-items: center;
  justify-content: center;

  @media ${device.mobileS} {
    padding-left: 30px;
    align-items:flex-start;
   
  }
  @media ${device.tabletL} {
    padding: 0 0 0 6%;
    align-items:flex-start;
   
  }
  @media ${device.laptop} {
    padding: 0 0 0 6%;
    align-items:flex-start;
    margin-top:60px;
   
  }
`;

const HeroMainTextStart = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 38px;
  font-weight: 1000;
  line-height: calc(47px + 1.2vw);
  letter-spacing: 0px;
  text-align: left;
  color: #3d79ef;
  @media ${device.mobileS} {
    font-size:33px;
  }
  @media ${device.laptop} {
    font-size:50px;
  }
  @media ${device.laptopL} {
    font-size:50px;
  }
`;

const HeroMainText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 38px;
  font-weight: 800;
  letter-spacing: 0px;
  
  color: #262c55;

  @media ${device.mobileS} {
    font-size: 33px;
    font-weight: 1000;
    text-align:left;
    /* line-height: calc(45px + 3.5vw); */
  }
  @media ${device.laptop} {
    font-size: 50px;
    font-weight: 1000;
    text-align: left;
    /* line-height: calc(45px + 3.5vw); */
  }

  @media ${device.laptopL} {
    font-size: 50px;
    font-weight: 1000;
    text-align: left;
    /* line-height: calc(45px + 3.5vw); */
  }
`;

const HeroSubText = styled.p`
  font-family: "DM Sans";
  font-size: calc(12px + 1vw);
  font-weight: 400;
  line-height: calc(20px + 1vw);
  letter-spacing: 0em;
  text-align: left;
  color: #4f4f4f;
  padding-top: 3%;
 
  
  @media ${device.mobileS} {
    font-size: 16px;
    font-weight: 400;
    line-height: 28px; 
    text-align: left;
    
  }
  @media ${device.tablet} {
    font-size: 22px;
    font-weight: 400;
    line-height: 40px;
    
  }
  @media ${device.laptop} {
    text-align: left;
  }
`;

const HeroDownloadButtons = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction:row;
  margin-top: 40px;
  @media ${device.mobileS} {
  flex-direction:column;
  gap: 20px;
  width: 90%;
  }
  @media ${device.laptop} {
  flex-direction:row;
  gap: 0;
  width: 100%;
  }
`;



const HeroRightContainer = styled.div`
  display: flex;
  margin-right:-15px;
  justify-content: end;
  @media ${device.mobileS} {
    width: 90%;
    margin-top: 90px;
    margin-right:0;
      margin-right:-40px;
   
  }
  @media ${device.mobileL} {
    width: 90%;
    margin-top: 90px;
    margin-right:0;
    
  }
  @media ${device.tablet} {
    width: 90%;
    margin-top: 70px;
  }
  @media ${device.laptop} {
    width: 100%;
    margin-top:0;
    
  }
`;

const HeroPhoneImage = styled.img`
  width: 100%;
  height: 100%;
  content: url("/images/hand-small.svg");

  /* @media ${device.tablet} {
    content: url("/images/hand-small.svg");
    margin-right:-35px;
    width: 100%;
  } */
  @media ${device.tablet} {
    content: url("/images/hand-small.svg");
    margin-right:-35px;
    width: 100%;
  }
  @media ${device.laptop} {
    width: 550px;
    margin:0;
    /* margin-left: -14% !important; */
    content: url("/images/phone-hand.svg");
  }
  @media ${device.laptopL} {
    width: 598px;
    /* margin-left: -14% !important; */
    content: url("/images/phone-hand.svg");
  }

  `;
const HeroInput = styled.input`
height: 62px;

border:1px solid #0E040480;
background-color: transparent;
width: 350px;
@media ${device.mobileS} {
  border-radius:10px;
    width:100% ;
  }
@media ${device.mobileL} {
  border-radius:10px;
    
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
const HeroBtn = styled.button`
border: none;
background-color: #262C55;
height: 62px;
color:white;
font-size: 18px;
padding: 0 15px;
width: auto;

@media ${device.mobileS} {
   border-radius:10px;
   width: 100%;
   font-size:16px;
    
  }
  @media ${device.laptop} {
    font-size: 18px;
    border-top-right-radius:10px;
border-bottom-right-radius:10px;
border-top-left-radius:unset;
border-bottom-left-radius:unset;
width: 311px;
    
  }

`;

export {
  HeroContainer,
  HeroOrientationContainer,
  HeroLeftContainer,
  HeroMainTextStart,
  HeroMainText,
  HeroSubText,
  HeroDownloadButtons,
  HeroInput,
  HeroRightContainer,
  HeroPhoneImage,
  HeroBtn
};
