import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
  const { inventoryId } = useParams();

  // Image
  // description
  // invertory button
  // add new intertory button

  return (
    <div>
      <h1>Inventory {inventoryId}!</h1>
    </div>
  );
};

export default Inventory;
