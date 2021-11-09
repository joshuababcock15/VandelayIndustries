/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { CardBody, CardTitle, CardText, CardImg, Card } from 'reactstrap';

const propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  link: PropTypes.string,
};

const defaultProps = {
  title: 'Vandley Industries',
  subtitle: '',
};

export default function CardImage(props) {
  const { imageSrc, imageAlt, title, subtitle, link, linkRef } = props;

  return (
    <Card>
      <CardImg alt={imageAlt} src={imageSrc} top width="100%" />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>{subtitle}</CardText>
        <a href={linkRef}>{link}</a>
      </CardBody>
    </Card>
  );
}

CardImage.propTypes = propTypes;
CardImage.defaultProps = defaultProps;
