import styled from "styled-components";
import "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  tabletL: "820px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletL: `(min-width: ${size.tabletL})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      powderWhite: string;
      persianGreen: string;
      lightBlue: string;
      onyx: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
  }
}

const Container = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 10px;
`;

export { Container, Title, Paragraph };
