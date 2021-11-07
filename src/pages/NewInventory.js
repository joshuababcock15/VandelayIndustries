/* eslint-disable react/prop-types */
// add prop types lateer

import React from 'react';
import { Button, Input, Form, FormGroup, Label } from 'reactstrap';

const NewInventory = ({
  handleSubmit,
  newSKU,
  setNewSKU,
  newQuantity,
  setNewQuantity,
  newName,
  setNewName,
  newDescription,
  setNewDescription,
}) => (
  <div>
    <h1>New Inventory!</h1>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Enter name"
          type="text"
          required
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="SKU">SKU</Label>
        <Input
          id="SKU"
          name="SKU"
          placeholder="enter SKU number"
          type="text"
          required
          value={newSKU}
          onChange={(e) => setNewSKU(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="quantity">Select Quanttity</Label>
        <Input
          id="quantity"
          name="quantity"
          placeholder="enter quantity "
          type="text"
          required
          value={newQuantity}
          onChange={(e) => setNewQuantity(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Description</Label>
        <Input
          id="exampleText"
          name="text"
          type="textarea"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  </div>
);

export default NewInventory;
