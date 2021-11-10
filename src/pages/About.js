import React from 'react';
import { CardGroup } from 'reactstrap';
import styled from 'styled-components';
import CardImage from '../components/CardImage';
import SectionTitle from '../components/SectionTitle';
import CardAbout from '../components/CardAbout';
import { AboutData } from '../data/aboutData';

const aboutData = AboutData.data;
const infoData = AboutData.info;

const Wrapper = styled.div`
  background-color: #93b1a7;
`;

const _renderCardImage = () => (
  <CardGroup>
    {aboutData.map((card, index) => (
      <CardImage
        key={index}
        imageSrc={card?.imageSrc}
        imageAlt={card?.imageAlt}
        title={card?.title}
        subtitle={card?.subtitle}
      />
    ))}
  </CardGroup>
);

const About = () => (
  <Wrapper>
    <CardAbout
      title={infoData?.title}
      subtitle={infoData?.subtitle}
      listTitle={infoData?.listTitle}
      lists={infoData?.lists}
      imageAlt={infoData?.imageAlt}
      imageSrc={infoData?.imageSrc}
    />
    <SectionTitle title="Meet the team" />
    {_renderCardImage()}
  </Wrapper>
);

export default About;
