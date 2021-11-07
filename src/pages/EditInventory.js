/* eslint-disable react/prop-types */
// add prop types lateer

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Input, Form, FormGroup, Label } from 'reactstrap';

const NewInventory = ({
  handleEdit,
  inventoryData,
  setEditSKU,
  editSKU,
  setEditQuantity,
  editQuantity,
  setEditName,
  editName,
  setEditDescription,
  editDescription,
}) => {
  const { id } = useParams();
  const inventory = inventoryData.find((item) => item.id.toString() === id);

  useEffect(() => {
    if (inventory) {
      setEditSKU(inventory.itemSKU);
      setEditQuantity(inventory.ItemQuantity);
      setEditName(inventory.itemName);
      setEditDescription(inventory.itemDescription);
    }
  }, [inventory, setEditSKU, setEditQuantity, setEditName, setEditDescription]);

  return (
    <div>
      <h1>Edit Inventory!</h1>
      {editName && (
        <Form onSubmit={(e) => e.preventDefault()}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="SKU">SKU</Label>
            <Input
              id="SKU"
              name="SKU"
              type="text"
              required
              value={editSKU}
              onChange={(e) => setEditSKU(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="quantity">Select Quanttity</Label>
            <Input
              id="quantity"
              name="quantity"
              type="text"
              required
              value={editQuantity}
              onChange={(e) => setEditQuantity(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Description</Label>
            <Input
              id="exampleText"
              name="text"
              type="textarea"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
          </FormGroup>
          <Button type="submit" onClick={() => handleEdit(inventory.id)}>
            Submit
          </Button>
        </Form>
      )}
      {/* {!editName && (
        <>
          <h2>Post Not Found</h2>
        </>
      )} */}
    </div>
  );
};
export default NewInventory;
