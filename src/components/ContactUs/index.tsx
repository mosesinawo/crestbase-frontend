import React from 'react';
import {
  ContactUsContainer,
  DesktopSideDiv,
  DesktopSideDivSubtext,
  FormContainer,
  FormHeader,
} from './ContactUs.styled';
import ContactForm from './ContactForm';

const ContactUs = () => {
  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff' }}>
      <ContactUsContainer>
        <FormContainer>
          <FormHeader>Get in touch with us</FormHeader>
          <ContactForm />
        </FormContainer>
        <DesktopSideDiv>
          <DesktopSideDivSubtext />
        </DesktopSideDiv>

      </ContactUsContainer>
    </div>
  );
};

export default ContactUs;
