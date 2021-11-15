import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import {
  Button,
  Input,
  Form,
  FormGroup,
  Label,
  Modal,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import api from '../api/factories';

const PageWrapper = styled.div`
  padding: 40px;
`;

const StyledButton = styled(Button)`
  margin-left: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 200px;
  justify-content: center;
`;

const EditInventory = () => {
  const { inventoryItemId } = useParams();
  const [inventory, setInventory] = useState('');
  const [editSKU, setEditSKU] = useState('');
  const [editQuantity, setEditQuantity] = useState('');
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [modal, setModal] = useState(false);
  const modalClose = () => setModal(false);
  const modalOpen = () => setModal(true);
  const history = useHistory();
  const WarehouseId = parseInt(inventory?.warehouseId);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await api.get(`inventoryItems/${inventoryItemId}`);
        setInventory(response.data);
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
  }, [inventoryItemId]);

  useEffect(() => {
    if (inventoryItemId) {
      setEditSKU(inventory?.itemSKU);
      setEditQuantity(inventory?.itemQuantity);
      setEditName(inventory?.itemName);
      setEditDescription(inventory?.itemDescription);
    }
  }, [inventoryItemId, inventory]);

  const handleEdit = async () => {
    const updateInventory = {
      warehouseId: WarehouseId,
      itemSKU: editSKU ?? inventory?.itemSKU,
      itemQuantity: editQuantity ?? inventory?.itemQuantity,
      itemName: editName ?? inventory?.itemName,
      itemDescription: editDescription ?? inventory?.itemDescription,
    };
    try {
      const response = await api.put(
        `inventoryItems/${inventoryItemId}`,
        updateInventory
      );
      setInventory(
        [inventory].map((item) =>
          item.id === inventoryItemId ? { ...response.data } : item
        )
      );
      setEditSKU('');
      setEditQuantity('');
      setEditName('');
      setEditDescription('');
      history.push(`/warehouses/${WarehouseId}/inventoryItems`);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`inventoryItems/${inventoryItemId}`);
      const inventoryList = [inventory].filter(
        (item) => item.id !== inventoryItemId
      );
      setInventory(inventoryList);
      history.push(`/warehouses/${WarehouseId}/inventoryItems`);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <PageWrapper>
      <h1>Edit Inventory!</h1>
      <Form onSubmit={(e) => e.preventDefault()}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            defaultValue={editName ?? inventory?.itemName}
            onChange={(e) => {
              setEditName(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="SKU">SKU</Label>
          <Input
            id="SKU"
            name="SKU"
            type="text"
            required
            defaultValue={editSKU ?? inventory?.itemSKU}
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
            defaultValue={editQuantity ?? inventory?.itemQuantity}
            onChange={(e) => setEditQuantity(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Description</Label>
          <Input
            id="exampleText"
            name="text"
            type="textarea"
            defaultValue={editDescription ?? inventory?.itemDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
        </FormGroup>
        <ButtonWrapper>
          <Button type="submit" onClick={handleEdit}>
            Submit
          </Button>
          <StyledButton color="danger" onClick={modalOpen}>
            Delete
          </StyledButton>
          <Modal toggle={modalClose} isOpen={modal}>
            <ModalHeader toggle={modalClose} isOpen={modal}>
              Are you sure you want to delete this item?
            </ModalHeader>
            <ModalFooter>
              <StyledButton color="danger" onClick={handleDelete}>
                Delete
              </StyledButton>{' '}
              <Button onClick={modalClose}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </ButtonWrapper>
      </Form>
    </PageWrapper>
  );
};

export default EditInventory;
