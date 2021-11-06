import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import {
  CardBody,
  Button,
  CardTitle,
  CardSubtitle,
  Card,
  CardText,
} from 'reactstrap';

const propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  warehouseId: PropTypes.number,
  //   quantity: PropTypes.number,
  //   sku: PropTypes.number,
};

const defaultProps = {};

const CardFactory = (props) => {
  const { name, description, warehouseId } = props;
  return (
    <div>
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
        <Link to={`/warehouses/${warehouseId}/inventory-items`}>
          <Button size="sm" className="mr-2">
            Check out the list a Machienes
          </Button>
        </Link>
      </Card>
    </div>
  );
};

CardFactory.propTypes = propTypes;
CardFactory.defaultProps = defaultProps;

export default CardFactory;
