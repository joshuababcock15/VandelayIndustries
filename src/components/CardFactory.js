import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CardBody, CardTitle, CardSubtitle, Card, CardText } from 'reactstrap';

const propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  //   quantity: PropTypes.number,
  //   sku: PropTypes.number,
};

const defaultProps = {};

const CardWrapper = styled.div`
  width: 50%;
`;

const CardFactory = (props) => {
  const { name, description } = props;
  return (
    <CardWrapper>
      <Card color="primary">
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {name}
          </CardSubtitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {name}
          </CardSubtitle>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </CardWrapper>
  );
};

CardFactory.propTypes = propTypes;
CardFactory.defaultProps = defaultProps;

export default CardFactory;
