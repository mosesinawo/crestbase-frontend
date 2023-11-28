import styled from 'styled-components';

const GridCards = styled.div`
  box-sizing: border-box;
  padding: 10% 3% 7% 3%;

  width: 100%;
  /* height: 400px; */

  background: #ffffff;

  font-weight: 600;
  font-size: 24px;
  line-height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #333333;
  box-shadow: 0px 0px 50px 2px #0e04040f;
  border-radius: 20px;
`;

const GridCardsLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  gap: 10%;
  padding-bottom: 10px;
  padding-top: 10px;
`;

const CardValueBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 100%;
`;

const CardIcon = styled.img``;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px 0px 5px;
  gap: 10px;
`;

const CardTextHeader = styled.h3`
  font-family: 'Merriweather';
  font-size: 18px;
  font-weight: 900;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: center;
  color: #262c55;
`;

const CardTextMessage = styled.p`
  font-family: 'DM Sans';
  font-size: 14px;
  font-weight: 300;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
  color: #4f4f4f;
`;

export {
  GridCards,
  GridCardsLayout,
  CardValueBox,
  CardIcon,
  CardText,
  CardTextHeader,
  CardTextMessage,
};
