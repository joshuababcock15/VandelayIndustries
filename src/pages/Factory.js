import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import CardFactory from '../components/CardFactory';

const propTypes = {
  data: PropTypes.array,
};

const Factory = (props) => {
  const { factoryId } = useParams();
  const { data } = props;

  const factoryData = data[factoryId];

  return (
    <div>
      <h1>Factory {factoryId}!</h1>
      <CardFactory
        name={factoryData?.factoryName}
        description={factoryData?.factoryDescription}
      />
    </div>
  );
};

Factory.propTypes = propTypes;

export default Factory;
