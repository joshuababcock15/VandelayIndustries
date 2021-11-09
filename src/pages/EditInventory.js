import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { Button, Input, Form, FormGroup, Label } from 'reactstrap';
import api from '../api/factories';

const propTypes = {
  inventoryData: PropTypes.array,
};

const PageWrapper = styled.div`
  padding: 40px;
`;

const EditInventory = ({ inventoryData }) => {
  const { inventoryItemId } = useParams();

  const invertoryItem = inventoryData.filter(
    (item) => item.id.toString() === inventoryItemId
  );

  // could be find
  const [inventory, setInvertory] = useState('');
  const [editSKU, setEditSKU] = useState('');
  const [editQuantity, setEditQuantity] = useState('');
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');

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
    console.log(editName);
  }, [editName]);
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
    console.log('updateInventory', updateInventory);
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
              console.log(e);
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
        <Button type="submit" onClick={() => handleEdit(invertoryItem[0]?.id)}>
          Submit
        </Button>
      </Form>
      {/* {!editName && (
        <>
          <h2>Post Not Found</h2>
        </>
      )} */}
    </PageWrapper>
  );
};

EditInventory.propTypes = propTypes;

export default EditInventory;
