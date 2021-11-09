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
  color: white;
`;

const TitleWrapper = styled.div`
  width: 100%;
  padding: 20px 12px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: beige;
  position: absolute;
`;

export default function Footer(props) {
  const { title } = props;
  return (
    <Container>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
    </Container>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
