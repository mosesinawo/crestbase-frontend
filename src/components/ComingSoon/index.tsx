import React, { useState } from "react";
import {
  Button,
  DownloadButtons,
  FormEmailDiv,
  FormInput,
  FormSubmit,
  FrameContainer,
  FrameContainerImage,
  ImageContainer,
  Input,
  MainText,
  SectionContainer,
  TextContainer,
  TimerText,
  WaitListForm,
} from "./ComingSoon.styled";
import { GlassContainerImage } from "../Assets/DownloadGlassContainer/DownloadGlassContainer.styled";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";

const ComingSoon = () => {
  const targetDate = new Date("2023-08-16T23:59:59Z");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can perform any action with the email value here, like sending it to a server or handling it in your application.

    const url =
      "https://sheet.best/api/sheets/7ca999ae-1949-40b6-a744-3a4901b603cd";
    const response = await axios.post(
      url,
      { email },
      {
        headers: {
          "X-Api-Key": process.env.SHEET_API_KEY,
        },
      }
    );
    if (response.data) {
      setEmail("");
      toast.success("Thank you for joining our waiting list. We will get in touch soon");
    }
    console.log("Submitted email:", email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <SectionContainer>
      <FrameContainer>
        <TextContainer>
          <MainText><span>Coming</span> Soon on IOS and Andriod</MainText>
        <DownloadButtons>
          <Input placeholder="Email" />
          <Button>Join our waiting list</Button>
        </DownloadButtons>
        </TextContainer>
      </FrameContainer>
    </SectionContainer>
  );
};

export default ComingSoon;
