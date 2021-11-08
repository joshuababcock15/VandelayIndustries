/* eslint-disable react/prop-types */
// add prop types lateer

import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { Button, Input, Form, FormGroup, Label } from 'reactstrap';
import api from '../api/factories';

const EditInventory = ({
  inventoryData,
  handleEdit,
  //   editSKU,
  //   setEditSKU,
  //   editQuantity,
  //   setEditQuantity,
  //   editName,
  //   setEditName,
  //   editDescription,
  //   setEditDescription,
}) => {
  const { warehouseId, inventoryItemId } = useParams();
  const invertoryItem = inventoryData.filter(
    (item) => item.id.toString() === inventoryItemId
  );

  const [inventory, setInvertory] = useState();
  const [editSKU, setEditSKU] = useState(inventory?.itemSKU);
  const [editQuantity, setEditQuantity] = useState(inventory?.itemQuantity);
  const [editName, setEditName] = useState(invertoryItem[0]?.itemName);
  const [editDescription, setEditDescription] = useState(
    inventory?.itemDescription
  );

  useEffect(() => {
    if (invertoryItem) {
      setEditSKU(invertoryItem?.itemSKU);
      setEditQuantity(invertoryItem?.itemQuantity);
      setEditName(invertoryItem?.itemName);
      setEditDescription(invertoryItem?.itemDescription);
    }
  }, [
    invertoryItem,
    setEditSKU,
    setEditQuantity,
    setEditName,
    setEditDescription,
  ]);

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

  //   const handleEdit = async (id) => {
  //     const updateInventory = {
  //       id,
  //       warehouseId: 1,
  //       itemSKU: editSKU,
  //       itemQuantity: editQuantity,
  //       itemName: editName,
  //       itemDescription: editDescription,
  //     };
  //     try {
  //       const response = await api.put(
  //         `invertoryItems/${inventoryItemId}`,
  //         updateInventory
  //       );
  //       console.log(response);
  //       setInvertory(
  //         invertoryItem[0].map((item) =>
  //           item.id === inventoryItemId ? { ...response.data } : item
  //         )
  //       );
  //       setEditSKU('');
  //       setEditQuantity('');
  //       setEditName('');
  //       setEditDescription('');
  //       history.push(`/warehouses/${warehouseId}/invertoryItems`);
  //     } catch (err) {
  //       console.log(`Error: ${err.message}`);
  //     }
  //   };

  //   const handleDelete = async () => {
  //     try {
  //       await api.delete(`inventoryItems/${inventoryItemId}`);
  //       const inventoryList = invertoryItem[0].filter(
  //         (item) => item.id !== inventoryItemId
  //       );
  //       setInvertory(inventoryList);
  //       //   history.push(`/warehouses/0/invertoryItems`);
  //     } catch (err) {
  //       console.log(`Error: ${err.message}`);
  //     }
  //   };

  return (
    <div>
      {/* <Link to="/warehouses/0/inventoryItems">
        <Button
          className="deleteButton"
          onClick={() => handleDelete(invertoryItem[0]?.id)}
        >
          Delete
        </Button>
      </Link> */}
      <h1>Edit Inventory!</h1>
      <Form onSubmit={(e) => e.preventDefault()}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="hi"
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
        <Link to="/warehouses/0/invertoryItems">
          <Button type="submit" onClick={() => handleEdit(invertoryItem?.id)}>
            Submit
          </Button>
        </Link>
      </Form>
      {/* {!editName && (
        <>
          <h2>Post Not Found</h2>
        </>
      )} */}
    </div>
  );
};
export default EditInventory;
