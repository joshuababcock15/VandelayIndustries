import React from 'react';
import PropTypes from 'prop-types';
import {
  CardBody,
  Button,
  CardTitle,
  CardSubtitle,
  CardText,
  Card,
} from 'reactstrap';

const propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
  sku: PropTypes.number,
};

const defaultProps = {};

const CardItem = (props) => {
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

CardItem.propTypes = propTypes;
CardItem.defaultProps = defaultProps;

export default CardItem;
