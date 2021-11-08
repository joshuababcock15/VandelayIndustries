/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link, useHistory } from 'react-router-dom';
import {
  Table,
  Badge,
  Button,
  Offcanvas,
  Input,
  OffcanvasHeader,
  Form,
  FormGroup,
  Label,
} from 'reactstrap';
import api from '../api/factories';

const propTypes = {
  //   data: PropTypes.array,
};

const Inventory = () => {
  const { warehouseId } = useParams();
  const [invertory, setInvertory] = useState();
  const [open, setOpen] = useState(false);
  const [newSKU, setNewSKU] = useState('');
  const [newQuantity, setNewQuantity] = useState('');
  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const history = useHistory();

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await api.get(
          `warehouses/${warehouseId}/inventoryItems`
        );
        setInvertory(response.data);
      } catch (err) {
        if (err.response) {
          // not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchInventory();
  }, [warehouseId]);

  const _renderInventory = () => {
    if (!invertory) return null;
    return (
      <>
        {invertory.map((items, index) => {
          const handleDelete = async () => {
            try {
              await api.delete(`/inventoryItems/${items?.id}`);
              const inventoryList = invertory.filter(
                (item) => item.id !== items?.id
              );
              setInvertory(inventoryList);
            } catch (err) {
              console.log(`Error: ${err.message}`);
            }
          };

          const handleEdit = async () => {
            const updateInventory = {
              itemSKU: newSKU,
              itemQuantity: newQuantity,
              itemName: newName,
              itemDescription: newDescription,
            };
            try {
              const response = await api.put(
                `invertoryItems/${items?.id}`,
                updateInventory
              );
              setInvertory(
                invertory.map((item) =>
                  item.id === items?.id ? { ...response.data } : item
                )
              );
              setNewSKU('');
              setNewQuantity('');
              setNewName('');
              setNewDescription('');
            } catch (err) {
              console.log(`Error: ${err.message}`);
            }
          };

          return (
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
                      <Link to={`/inventoryItems/${items.id}`}>
                        <Badge color="primary">Edit</Badge>
                      </Link>
                    </div>
                    <Button color="primary" onClick={handleDelete}>
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          );
        })}
      </>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newInventory = {
      itemSKU: newSKU,
      itemQuantity: newQuantity,
      itemName: newName,
      itemDescription: newDescription,
    };
    try {
      const response = await api.post(
        `/warehouses/${warehouseId}/inventoryItems`,
        newInventory
      );
      const allInventory = [...invertory, response.data];
      setInvertory(allInventory);
      setNewSKU('');
      setNewQuantity('');
      setNewName('');
      setNewDescription('');
      handleClose();
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <div>
      <h1>Inventory!</h1>
      <div>
        <Button color="primary" onClick={handleOpen} open={open}>
          Add Inventory Item
        </Button>
        <Offcanvas
          direction="end"
          toggle={handleClose}
          isOpen={open}
          fade={false}
        >
          <OffcanvasHeader toggle={handleClose}>New Item</OffcanvasHeader>
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
        </Offcanvas>
      </div>
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

export default Inventory;
