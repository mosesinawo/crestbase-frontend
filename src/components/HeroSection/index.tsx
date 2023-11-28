import React, { useState } from "react";
import {
  HeroContainer,
  HeroMainTextStart,
  HeroMainText,
  HeroSubText,
  HeroDownloadButtons,
  HeroOrientationContainer,
  HeroLeftContainer,
  HeroRightContainer,
  HeroPhoneImage,
  HeroInput,
  HeroBtn
} from "./HeroSection.styled";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const HeroSection = () => {
  const router = useRouter();
  const handleDownloadLinkClick = () => {
    router.push("/comingsoon"); // Navigate to the specified page
  };
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = "https://sheetdb.io/api/v1/8q580u5ytfriv";
    const response = await axios.post(
      url,
      formData,
      {
        headers: {
          "X-Api-Key": process.env.SHEET_API_KEY,
        },
      }
    );
    console.log(response)
    if (response.data) {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      toast.success("Thank you for your feedback")
    }
  };


  return (
    <HeroContainer>
      <HeroOrientationContainer>
        <HeroLeftContainer>
          <div style={{ display: "flex" }}>
            <HeroMainText  >
              <HeroMainTextStart>Endless</HeroMainTextStart> real estate
              possibilities for you
            </HeroMainText>
          </div>
          <HeroSubText>
            Rent apartments, buy lands, buy properties, and book event halls easily with no hassle.
          </HeroSubText>
          <HeroDownloadButtons onSubmit={handleSubmit}>
            <HeroInput type="email" placeholder="Email"
              id="email"
              name="email"
              onChange={handleChange}
              required
              value={formData.email} />
            <HeroBtn type="submit">Join our waiting list</HeroBtn>
          </HeroDownloadButtons>
        </HeroLeftContainer>
        <HeroRightContainer>
          <HeroPhoneImage />
          {/* <Image alt="hero-image" src={"/images/phone-hand.svg"} width={598} height={671}/> */}
        </HeroRightContainer>
      </HeroOrientationContainer>
    </HeroContainer>
  );
};

export default HeroSection;
