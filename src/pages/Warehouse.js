import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const Warehouse = () => {
  const { warehouseId } = useParams();

  return (
    <div>
      <h1>Warehouse {warehouseId}!</h1>
      <Link to={`/warehouses/${warehouseId}/inventory-items`}>
        <Button color="success" size="sm" className="mr-2">
          Check out the Inventory
        </Button>
      </Link>
    </div>
  );
};

export default Warehouse;
