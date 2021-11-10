import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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

const propTypes = {
  inventoryData: PropTypes.array,
};

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

const EditInventory = ({ inventoryData }) => {
  const { inventoryItemId } = useParams();

  const invertoryItem = inventoryData.filter(
    (item) => item.id.toString() === inventoryItemId
  );

  // eslint-disable-next-line no-unused-vars
  const [inventory, setInvertory] = useState('');
  const [editSKU, setEditSKU] = useState('');
  const [editQuantity, setEditQuantity] = useState('');
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [modal, setModal] = useState(false);
  const modalClose = () => setModal(false);
  const modalOpen = () => setModal(true);

  useEffect(() => {
    if (inventoryItemId) {
      setEditSKU(invertoryItem[0]?.itemSKU);
      setEditQuantity(invertoryItem[0]?.itemQuantity);
      setEditName(invertoryItem[0]?.itemName);
      setEditDescription(invertoryItem[0]?.itemDescription);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inventoryItemId]);

  const history = useHistory();

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await api.get(`inventoryItems/${inventoryItemId}`);
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
  }, [inventoryItemId]);

  const handleEdit = async () => {
    const updateInventory = {
      warehouseId: parseInt(invertoryItem[0]?.warehouseId),
      itemSKU: editSKU,
      itemQuantity: editQuantity,
      itemName: editName,
      itemDescription: editDescription,
    };
    try {
      const response = await api.put(
        `inventoryItems/${inventoryItemId}`,
        updateInventory
      );
      setInvertory(
        invertoryItem.map((item) =>
          item.id === inventoryItemId ? { ...response.data } : item
        )
      );
      setEditSKU('');
      setEditQuantity('');
      setEditName('');
      setEditDescription('');
      history.push(
        `/warehouses/${invertoryItem[0]?.warehouseId}/inventoryItems`
      );
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`inventoryItems/${inventoryItemId}`);
      const inventoryList = inventoryData.filter(
        (item) => item.id !== inventoryItemId
      );
      setInvertory(inventoryList);
      history.push(
        `/warehouses/${invertoryItem[0]?.warehouseId}/inventoryItems`
      );
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
            defaultValue={editName}
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
            defaultValue={editSKU}
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
            defaultValue={editQuantity}
            onChange={(e) => setEditQuantity(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Description</Label>
          <Input
            id="exampleText"
            name="text"
            type="textarea"
            defaultValue={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
        </FormGroup>
        <ButtonWrapper>
          <Button
            type="submit"
            onClick={() => handleEdit(invertoryItem[0]?.id)}
          >
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

EditInventory.propTypes = propTypes;

export default EditInventory;
