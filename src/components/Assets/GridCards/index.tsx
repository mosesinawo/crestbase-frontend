import React from 'react';
import {
  GridCards,
  GridCardsLayout,
  CardValueBox,
  CardIcon,
  CardText,
  CardTextHeader,
  CardTextMessage,
} from './GridCards.styled';

interface GridCardProps {
  iconSrc: string;
  header: string;
  message?: string;
}

const GridCard: React.FC<GridCardProps> = ({ iconSrc, header, message }) => {
  return (
    <GridCards>
      <GridCardsLayout>
        <CardValueBox>
          <div>
            <CardIcon src={iconSrc} alt='' width={'100%'} height={'100%'} />
          </div>
          <CardText>
            <CardTextHeader>{header}</CardTextHeader>
            <CardTextMessage>{message}</CardTextMessage>
          </CardText>
        </CardValueBox>
      </GridCardsLayout>
    </GridCards>
  );
};

export default GridCard;
