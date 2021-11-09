import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CardBody, CardTitle, CardSubtitle, Card, CardText } from 'reactstrap';

const propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  buildingName: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  state: PropTypes.string,
  streetLine: PropTypes.string,
  zipcode: PropTypes.string,
  linkRef: PropTypes.string,
  link: PropTypes.string,
};

const defaultProps = {};

const CardWrapper = styled.div`
  width: 100%;
  padding: 40px;
`;

const Link = styled.a`
  color: black;
`;

const ContentWrapper = styled.div`
  max-width: 500px;
`;

const CardFactory = (props) => {
  const {
    name,
    description,
    buildingName,
    city,
    country,
    state,
    streetLine,
    zipcode,
    linkRef,
    link,
  } = props;

  return (
    <CardWrapper>
      <Card color="light">
        <ContentWrapper>
          <CardBody>
            <CardTitle tag="h5">{name}</CardTitle>
            <CardText>{description}</CardText>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {buildingName}
            </CardSubtitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {streetLine} {zipcode}
            </CardSubtitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {city} {country} {state}
            </CardSubtitle>
            <Link href={linkRef}>{link}</Link>
          </CardBody>
        </ContentWrapper>
      </Card>
    </CardWrapper>
  );
};

CardFactory.propTypes = propTypes;
CardFactory.defaultProps = defaultProps;

export default CardFactory;
