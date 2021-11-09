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
  font-size: 4rem;
  color: black;
`;

const TitleWrapper = styled.div`
  width: 100%;
  padding: 20px 40px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: #dbfeb8;
`;

export default function SectionTitle(props) {
  const { title } = props;
  return (
    <Container>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
    </Container>
  );
}

SectionTitle.propTypes = propTypes;
SectionTitle.defaultProps = defaultProps;
