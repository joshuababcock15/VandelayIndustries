import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const propTypes = {
  data: PropTypes.array,
};

const Factories = (props) => {
  const { data } = props;
  return (
    <div className="App container">
      {data.map((post, id) => (
        <Link to={`/factories/${post.factoryId}`} key={id}>
          <Button color="success" size="sm" className="mr-2">
            {post.factoryName}
          </Button>
        </Link>
      ))}
    </div>
  );
};

Factories.propTypes = propTypes;

export default Factories;
