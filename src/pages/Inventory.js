import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import {
  Table,
  Button,
  Offcanvas,
  Input,
  OffcanvasHeader,
  Form,
  FormGroup,
  Label,
} from 'reactstrap';
import api from '../api/factories';

const PageWrapper = styled.div`
  padding: 0 40px;
`;

const FormWrapper = styled.div`
  padding: 0 20px;
`;

const StyledButton = styled(Button)`
  margin-bottom: 20px;
`;

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

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await api.get(
          `warehouses/${warehouseId}/inventoryItems`
        );
        setInvertory(response.data);
      } catch (err) {
        if (err.response) {
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
        {invertory.map((items, index) => (
          <tbody key={index}>
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{items?.itemName}</td>
              <td>{items?.itemQuantity}</td>
              <td>{items?.itemSKU}</td>
              <td>{items?.itemDescription}</td>
              <td>
                <Link to={`/inventoryItems/${items.id}`}>
                  <Button size="large" color="primary">
                    Edit/Delete
                  </Button>
                </Link>
              </td>
            </tr>
          </tbody>
        ))}
      </>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newInventory = {
      warehouseId: parseInt(warehouseId),
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
    <PageWrapper>
      <h1>Inventory</h1>
      <div>
        <StyledButton color="primary" onClick={handleOpen} open={open}>
          Add Inventory Item
        </StyledButton>
      </div>
      <Offcanvas
        direction="end"
        toggle={handleClose}
        isOpen={open}
        fade={false}
      >
        <OffcanvasHeader toggle={handleClose}>
          Enter in the the new item details
        </OffcanvasHeader>
        <FormWrapper>
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
        </FormWrapper>
      </Offcanvas>
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>SKU</th>
            <th>Description</th>
            <th>Update Item</th>
          </tr>
        </thead>
        {_renderInventory()}
      </Table>
    </PageWrapper>
  );
};

export default Inventory;
