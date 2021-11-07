import React from 'react';
import PropTypes from 'prop-types';
// s
import {
  CardBody,
  Button,
  CardTitle,
  CardSubtitle,
  CardText,
} from 'reactstrap';

const propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
  sku: PropTypes.number,
};

const defaultProps = {};

const Card = (props) => {
  const { name, description, quantity, sku } = props;
  <div>
    <Card color="light">
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {quantity}
        </CardSubtitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {sku}
        </CardSubtitle>
        <CardText>{description}</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  </div>;
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
