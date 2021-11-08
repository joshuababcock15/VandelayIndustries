import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const propTypes = {
  data: PropTypes.array,
};

const Warehouses = (props) => {
  const { data } = props;

  return (
    <div className="App container">
      {data.map((post, id) => (
        <Link to={`/warehouses/${post.id}`} key={id}>
          <Button color="success" size="sm" className="mr-2">
            {post.warehouseName}
          </Button>
        </Link>
      ))}
    </div>
  );
};

Warehouses.propTypes = propTypes;

export default Warehouses;
