import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import {
  Button,
  Offcanvas,
  Input,
  OffcanvasHeader,
  Form,
  FormGroup,
  Label,
} from 'reactstrap';

const propTypes = {
  data: PropTypes.array,
};

const Warehouse = (props) => {
  const { data } = props;

  const { warehouseId } = useParams();
  const warehouseData = data[warehouseId];

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  // make modal a reuseable component

  return (
    <div>
      <h1>Warehouse {warehouseId}!</h1>
      <Link to={`/warehouses/${warehouseId}/inventoryItems`}>
        <Button color="success" size="sm" className="mr-2">
          Check out the Inventory
        </Button>
      </Link>
      <div>
        <Button color="primary" onClick={handleOpen} open={open}>
          Add Inventory Item
        </Button>
        <Offcanvas direction="end" toggle={handleClose} isOpen={open}>
          <OffcanvasHeader toggle={handleClose}>New Item</OffcanvasHeader>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter name"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="SKU">SKU</Label>
              <Input
                id="SKU"
                name="SKU"
                placeholder="enter SKU number"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Select Quanttity</Label>
              <Input id="Quanttity" name="select" type="select">
                <option>100</option>
                <option>500</option>
                <option>1000</option>
                <option>5000</option>
                <option>10000</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Description</Label>
              <Input id="exampleText" name="text" type="textarea" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Offcanvas>
      </div>
    </div>
  );
};

Warehouse.propTypes = propTypes;

export default Warehouse;
