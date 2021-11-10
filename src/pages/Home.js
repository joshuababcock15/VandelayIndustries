import React from 'react';
import { CardGroup } from 'reactstrap';
import SectionTitle from '../components/SectionTitle';
import CardImage from '../components/CardImage';
import { CardsData } from '../data/homeData';

const cardData = CardsData.data;

const _renderCardImage = () => (
  <CardGroup>
    {cardData.map((card, index) => (
      <CardImage
        key={index}
        imageSrc={card?.imageSrc}
        imageAlt={card?.imageAlt}
        title={card?.title}
        subtitle={card?.subtitle}
        link={card?.link}
        linkRef={card?.linkRef}
      />
    ))}
  </CardGroup>
);

const Home = () => (
  <div>
    <SectionTitle title="Vandelay Industries - We don't just import...we import and export!" />
    {_renderCardImage()}
  </div>
);

export default Home;
