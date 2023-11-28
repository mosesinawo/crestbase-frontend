import React, { useState } from "react";
import {
  ContentContainer,
  DownloadButtons,
  DownloadGlassBtn,
  DownloadGlassInput,
  DownloadText,
  GlassContainer,
  GlassContainerImage,
  ImageContainer,
  SectionContainer,
  StatisticsText,
  TextContainer,
} from "./DownloadGlassContainer.styled";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const DownloadGlassContainer = () => {
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
    //https://sheet.best/api/sheets/7ca999ae-1949-40b6-a744-3a4901b603cd
    //https://api.apispreadsheets.com/data/oh3GxLmjjY6dhEgX/
    //https://sheetdb.io/api/v1/8q580u5ytfriv
    //https://sheetdb.io/api/v1/rp9muegy24tta
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
    <SectionContainer>
      <GlassContainer>
        <ContentContainer>
          <ImageContainer>
            <GlassContainerImage />
          </ImageContainer>
          <TextContainer>
            <DownloadText>Download The Crestbase App</DownloadText>
            <StatisticsText>
              Join our active users acquiring and investing in real estate
            </StatisticsText>
            <DownloadButtons onSubmit={handleSubmit}>
              <DownloadGlassInput type="email" placeholder="Email"
                id="email"
                name="email"
              onChange={handleChange}
              required
              value={formData.email}
              />
              <DownloadGlassBtn>Join our waiting list</DownloadGlassBtn>
            </DownloadButtons>
          </TextContainer>

        </ContentContainer>
      </GlassContainer>
    </SectionContainer>
  );
};

export default DownloadGlassContainer;
