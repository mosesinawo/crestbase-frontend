import { device } from "@/styles/global.styles";
import styled from "styled-components";

const AssetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #ffffff;
  margin-top:50px;
  padding-top: 0;
  padding-bottom: 80px;
 @media ${device.tablet} {
  margin-top:100px;
  padding-top: 80px;
  }

`;

const ColumnReverse = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  @media ${device.mobileL} {
   padding: 0px 20px;
  }
  @media ${device.tablet} {
    padding-top: 0;
  }
`;

const AssetsGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  margin-top: 64px;
  /* width: 87%; */
  margin-bottom: 50px;
  /* width: 328px; */
  @media ${device.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 1fr;
    width: 90%;
    justify-items: center;
    margin-top: 100px;
    align-items: stretch;
  }

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    width: 90%;
    justify-items: center;
    margin-top: 100px;
    align-items: stretch;
  }
`;

const SectionTagLine = styled.p`
  font-family: "Merriweather";
  font-size: 20px;
  font-weight: 900;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
  color: #262c55;
  width: 90%;
  padding: 0% 3%;
  @media ${device.tablet} {
    font-size: 28px;
    font-weight: 900;
    line-height: 52px;
    text-align: center;
  }
`;

const SectionDescriptorLine = styled.p`
  font-family: "DM Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
  width: 90%;
  padding: 0% 3%;
  color: #4f4f4f;
  @media ${device.laptop} {
    text-align: center;
  }
  `;
const AssetImgContainer = styled.div`
    
  `
const AssetImg = styled.img`
    content: url("/images/asset-cat-img.svg");
    width: 100%;
  `
const AssetTextContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content:space-between;
 align-items:center;
`
const AssetTextItem = styled.div`

`

const AssetTextTitle = styled.h3`
font-size: 20px;
color: #262C55;
font-weight:600;
@media ${device.tabletL} {
    font-size: 24px;
  }

`
const AssetTextdesc = styled.p`
font-family: "DM Sans";
font-size: 16px;
padding-right:60px;
margin:5px 0 20px;
color: #262C55;
@media ${device.tabletL} {
    font-size: 19px;
  }

`
const AssetBlueLine = styled.div`
height: 1px;
width: 100%;
background-color:#3D79EF;

`
export {
  AssetsContainer,
  ColumnReverse,
  AssetsGridContainer,
  SectionTagLine,
  SectionDescriptorLine,
  AssetImgContainer,
  AssetImg,
  AssetTextContainer,
  AssetTextTitle,
  AssetTextdesc,
  AssetTextItem,
  AssetBlueLine
};
