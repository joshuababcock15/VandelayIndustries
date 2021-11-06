import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="App container">
    <Link to="/factories">
      <Button
        color="success"
        size="sm"
        className="mr-2"
        onClick={() => console.log('go bills')}
      >
        Factories
      </Button>
    </Link>
    <Link to="/warehouses">
      <Button color="danger" size="sm">
        Warehouses
      </Button>
    </Link>
  </div>
);

export default Home;
