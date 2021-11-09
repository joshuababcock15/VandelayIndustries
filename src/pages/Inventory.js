/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useParams, Link, useHistory } from 'react-router-dom';
import {
  Table,
  Button,
  Offcanvas,
  Input,
  OffcanvasHeader,
  Form,
  FormGroup,
  Label,
  Modal,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import api from '../api/factories';

// const propTypes = {
//   //   data: PropTypes.array,
// };

const PageWrapper = styled.div`
  padding: 0 40px;
`;

const FormWrapper = styled.div`
  padding: 0 20px;
`;

const StyledButton = styled(Button)`
  width: 100px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Inventory = () => {
  const { warehouseId } = useParams();
  const [invertory, setInvertory] = useState();
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [newSKU, setNewSKU] = useState('');
  const [newQuantity, setNewQuantity] = useState('');
  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const modalClose = () => setModal(false);
  const modalOpen = () => setModal(true);

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
              modalClose();
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
                  <ButtonWrapper>
                    <div>
                      <Link to={`/inventoryItems/${items.id}`}>
                        <StyledButton size="large" color="primary">
                          Edit
                        </StyledButton>
                      </Link>
                    </div>
                    <div>
                      <StyledButton color="primary" onClick={modalOpen}>
                        Delete
                      </StyledButton>
                      <Modal toggle={modalClose} isOpen={modal}>
                        <ModalHeader toggle={modalClose} isOpen={modal}>
                          Are you sure you want to delete this item?
                        </ModalHeader>
                        <ModalFooter>
                          <Button color="primary" onClick={handleDelete}>
                            Delete
                          </Button>{' '}
                          <Button onClick={modalClose}>Cancel</Button>
                        </ModalFooter>
                      </Modal>
                    </div>
                  </ButtonWrapper>
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
      </div>
      <Table bordered>
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
    </PageWrapper>
  );
};

export default Inventory;
