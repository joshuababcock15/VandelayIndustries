import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
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
      <Link to={`/factories/${factoryId}/machienes`}>
        <Button size="sm" className="mr-2">
          Check out the list a Machienes
        </Button>
      </Link>
    </div>
  );
};

Factory.propTypes = propTypes;

export default Factory;
