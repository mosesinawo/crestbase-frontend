import { device } from '@/styles/global.styles';
import styled from 'styled-components';

const ContactUsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
 align-items: center;
 justify-content:space-between;
  flex-direction: row;
  width: 100%;
  background-color: #c4d7e524;
  margin-top:150px;
  @media ${device.tablet} {
   justify-content:center;
   border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 10px 0px rgba(38, 44, 85, 0.10);
height:100%;

  }
  @media ${device.laptop} {
    padding: 64px 86px;
    background-color: #c4d7e524;
  }
`;

const DesktopSideDiv = styled.div`
 
  @media ${device.mobileS} {
    display:none
  }
  @media ${device.laptop} {
  display:block;
  }
`;

const DesktopSideDivSubtext = styled.img`
  content: url("/images/contact-img.svg");
`;

const FormContainer = styled.div`
  width: 5%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 0 5%;
  border-radius: 20px;
  width: 627px;
  @media ${device.tablet} {
    width: 100%;
   
  }
  @media ${device.tablet} {
    width: 100%;
   
  }
  @media ${device.laptop} {
    width: 627px;
    padding: 10px 40px;
  }
`;

const FormHeader = styled.p`
font-family: 'Poppins', sans-serif;
  font-size: 34px;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: 0px;
  text-align: left;
  color: #262c55;
    @media ${device.mobileS} {
    padding: 10px 0px;
     font-size: 26px;
  }
    @media ${device.laptop} {
    padding: 10px 40px 10px 0;
     font-size: 34px;
  }
`;

const FormNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 45px;
`;

const FormEmailDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 53px;
`;

const FormMessageDiv = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  padding-top: 59px;
  padding-bottom: 59px;
`;

const Label = styled.label`
  font-family: 'DM Sans';
  color: #0e0404;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  @media ${device.laptop} {
    font-size: 20px;
  }
`;

const Input = styled.input`
  background-color: #ffffff;
  padding: 10px 15px;
  font-family: 'DM Sans';
  font-size: 14px;
  font-weight: 400;
  height: 60px;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  border: 0.6px solid #0e040480;
  border-radius: 10px;
  color: #000000;
  @media ${device.laptop} {
    font-size: 18px;
  }
`;

const FormMessageText = styled.textarea`
  background-color: #ffffff;
  padding: 10px 15px;
  font-family: 'DM Sans';
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
  border: 0.6px solid #0e040480;
  border-radius: 10px;
  height: 208px;
  resize: none;
  @media ${device.laptop} {
    font-size: 18px;
  }
`;

const FormSubmitbutton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 0.6px;
  background-color: #262c55;
  border: 0.6px solid #0e040480;

  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  color: #ffffff;

  @media ${device.desktop} {
    height: 60px;
    font-size: 20px;
  }
`;

export {
  ContactUsContainer,
  DesktopSideDiv,
  DesktopSideDivSubtext,
  FormContainer,
  FormHeader,
  FormNameDiv,
  FormEmailDiv,
  FormMessageDiv,
  Label,
  Input,
  FormMessageText,
  FormSubmitbutton,
};
