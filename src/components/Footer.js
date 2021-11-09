import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  title: PropTypes.string,
};

const defaultProps = {
  title: 'Vandley Industries',
};

const Title = styled.h2`
  font-size: 3rem;
  color: white;
`;
const Paragraph = styled.p`
  color: white;
  font-weight: 700;
  margin: 0;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

const ContactWrapper = styled.div``;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 250px;
  background-color: #93b1a7;
  position: absolute;
`;

export default function Footer(props) {
  const { title } = props;
  return (
    <Container>
      <Wrapper>
        <ContactWrapper>
          <Title>{title}</Title>
          <Paragraph>Email: support@vandelay.com</Paragraph>
          <Paragraph>Telephone: (800) 867-5309 </Paragraph>
        </ContactWrapper>
        <ContactWrapper>
          <Title>Awards:</Title>
          <Paragraph>20 time No soup for you award</Paragraph>
          <Paragraph>2010-2019 PF Flyer award</Paragraph>
          <Paragraph>6 time American pie award</Paragraph>
        </ContactWrapper>
      </Wrapper>
    </Container>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
