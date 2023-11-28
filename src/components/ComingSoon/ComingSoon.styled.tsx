import { device } from "@/styles/global.styles";
import styled from "styled-components";

const SectionContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:70px;
`;

const FrameContainer = styled.div`
 background-image:url("/images/comingsoon-bg.png");
 background-position:center;
 background-size:contain;
 background-repeat:no-repeat;
 width: 100%;
  height: 415px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:10px 0 60px;
  @media ${device.mobileS} {
    background-size:cover;
    margin: 0 10px;
    border-radius:20px;
  }
  @media ${device.laptop} {
    background-size:contain;
    width: 80%;
  }

`;


const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media ${device.laptop} {
    width: 50%;
  }
`;

const MainText = styled.p`
 font-family: 'Poppins', sans-serif;
  font-size: 50px;
  font-weight: 900;
  line-height: calc(1.8rem + 3vw);
  letter-spacing: 0px;
  text-align: center;
  color: #262c55;
  padding: 5px 50px;
  text-align: center;


  > span {
    color: #3d79ef;
    font-size: 50px;

    @media ${device.mobileS} {
    font-size: 27px;
    font-weight: 900;
    line-height:41px;
    text-align: center;
    padding: 5px 0;
  }
  @media ${device.tablet} {
    font-size: 40px;
    font-weight: 900;
    line-height: 68px;
    text-align: center;
    padding: 20px 0;
  }
   @media ${device.laptopL} {
    font-size: 50px;
    font-weight: 900;
    line-height: 68px;
    text-align: center;
    padding: 20px 0;
  }
  }

  @media ${device.mobileS} {
    font-size: 27px;
    font-weight: 900;
    line-height: 41px;
    text-align: center;
    padding: 5px 20px;
  }
  @media ${device.mobileM} {
    font-size: 27px;
    font-weight: 900;
    line-height: 41px;
    text-align: center;
    padding: 5px 50px;
  }
  @media ${device.tablet} {
    font-size: 40px;
    font-weight: 900;
    line-height: 68px;
    text-align: center;
    padding: 5px 0;
  }
  @media ${device.laptop} {
    font-size: 50px;
    font-weight: 900;
    line-height: 68px;
    text-align: center;
    padding: 5px 10px;
  }
  @media ${device.laptopL} {
    font-size: 50px;
    font-weight: 900;
    line-height: 68px;
    text-align: center;
    padding: 5px 40px;
  }
`;

const TimerText = styled.p`
  font-family: "DM Sans";
  font-size: 34px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0px;
  text-align: left;

  color: #262c55;
  padding-top: 10px;

  @media ${device.laptop} {
    font-size: 52px;
    line-height: 94px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 19%;
  align-items: center;
  justify-content: center;
  align-self: flex-end;

  @media ${device.laptop} {
    width: 40%;
    padding-top: 10%;
  }
`;

const FrameContainerImage = styled.img`
  width: 100%;
  max-width: 300px;
  @media ${device.laptop} {
    max-width: 700px;
    content: url("/images/desktop-glass-container-image.png");
  }
`;

const Timer = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  font-size: 40px;
  gap: 15px;
  > h4 {
    font-family: "DM Sans";
    font-size: 34px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0px;
    color: #262c55;
  }
  @media ${device.laptop} {
    > h4 {
      font-size: 52px;
      line-height: 85px;
    }
  }
`;


const DownloadButtons = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 0px;
  @media ${device.laptop} {
    margin-top: 0px;
  }
  @media ${device.laptopL} {
    margin-top: 20px;
  }
  
`;
const Input = styled.input`
 height: 62px;
border:1px solid #0E040480;
background-color: transparent;
width: 90%;
&::placeholder {
   font-size: 15px;
   color: #4F4F4F;
  }
`;
const Button = styled.button`
 border: none;
background-color: #262C55;
height: 62px;
color:white;
font-size: 18px;
padding: 0 15px;
width: 90%;
border-radius:10px;
`;


const WaitListForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 80px 0;
  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const FormEmailDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  @media ${device.laptop} {
    flex-direction: row;
    gap: 0;
    padding-bottom: 0;
    width: 45%;
  }
`;

const FormInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 0.6px solid #0e040480;
  font-family: "DM Sans";
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  padding: 20px 17px;

  @media ${device.laptop} {
    height: 62px;
    font-size: 16px;
    line-height: 24px;
    border-radius: 10px 0px 0px 10px;
  }
`;

const FormSubmit = styled.button`
  width: 100%;
  height: 50px;
  font-family: "DM Sans";
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  background-color: #3d79ef;
  border-radius: 10px;
  border: 0px;
  color: #ffffff;
  @media ${device.laptop} {
    min-width: fit-content;
    width: 35%;
    height: 62px;
    font-size: 19px;
    padding: 3px;
    line-height: 26px;
    border-radius: 0px 10px 10px 0px;
  }
`;

export {
  SectionContainer,
  FrameContainer,
  TextContainer,
  MainText,
  TimerText,
  ImageContainer,
  FrameContainerImage,
  Timer,
  DownloadButtons,
  Input,
  Button,
  WaitListForm,
  FormEmailDiv,
  FormInput,
  FormSubmit,
};
