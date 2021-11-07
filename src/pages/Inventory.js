/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import { Table, Badge, Button } from 'reactstrap';

const propTypes = {
  data: PropTypes.array,
};

const Inventory = (props) => {
  //   const { warehouseId } = useParams();
  const [open, setOpen] = useState(false);

  //   const handleOpen = () => setOpen(true);
  const { data, handleDelete } = props;

  //   const inventoryData = data[warehouseId];

  //   const invertory = inventoryData?.inventoryItems;

  const _renderInventory = () => {
    if (!data) return null;
    return (
      <>
        {data.map((items, index) => (
          <tbody key={index}>
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{items?.itemName}</td>
              <td>{items?.itemDescription}</td>
              <td>{items?.itemQuantity}</td>
              <td>{items?.itemSKU}</td>
              <td>
                <div>
                  <div>
                    <Link to={`/inventory/${items.id}`}>
                      <Badge color="primary">Edit</Badge>
                    </Link>
                  </div>
                  <Link to={`/inventory/${items.id}`}>
                    <Badge color="primary">Delete</Badge>
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </>
    );
  };

  return (
    <div>
      <h1>Inventory!</h1>
      <Link to="/newInventory">
        <Button size="sm" className="mr-2">
          New Inventory
        </Button>
      </Link>
      <Table hover bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>SKU</th>
            <th>Update Item</th>
          </tr>
        </thead>
        {_renderInventory()}
      </Table>
    </div>
  );
};

Inventory.propTypes = propTypes;

export default Inventory;
