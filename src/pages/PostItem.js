/* eslint-disable react/prop-types */
// add prop types lateer

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';

const PostItem = ({ handleDelete, inventoryData }) => {
  const { id } = useParams();
  const item = inventoryData.find(
    (invertory) => invertory.id.toString() === id
  );
  return (
    <div>
      <h1>Item!</h1>
      <Link to={`/inventoryItems/${item.id}`}>
        <Button>Edit</Button>
      </Link>
      <Button className="deleteButton" onClick={() => handleDelete(item.id)}>
        Delete
      </Button>
    </div>
  );
};

export default PostItem;
