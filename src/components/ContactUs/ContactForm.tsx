import React, { useState } from "react";
import {
  FormEmailDiv,
  FormMessageDiv,
  FormMessageText,
  FormNameDiv,
  FormSubmitbutton,
  Input,
  Label,
} from "./ContactUs.styled";
import axios from "axios";
import { toast } from "react-toastify";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm: React.FC = () => {
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
    <form onSubmit={handleSubmit}>
      <FormNameDiv>
        <Label htmlFor="name">Name:</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Name"
        />
      </FormNameDiv>
      <FormEmailDiv>
        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email"
        />
      </FormEmailDiv>
      <FormMessageDiv>
        <Label htmlFor="message">Message:</Label>
        <FormMessageText
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Message"
        />
      </FormMessageDiv>
      <FormSubmitbutton type="submit">Send Message</FormSubmitbutton>
    </form>
  );
};

export default ContactForm;
