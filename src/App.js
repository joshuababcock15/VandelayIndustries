import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import Factories from './pages/Factories';
import Warehouses from './pages/Warehouses';
import Factory from './pages/Factory';
import Warehouse from './pages/Warehouse';
import Inventory from './pages/Inventory';
import api from './api/factories';
import Header from './components/Header';
import Footer from './components/Footer';
import Machiene from './pages/Machiene';
import EditInventory from './pages/EditInventory';
import NewInventory from './pages/NewInventory';
import PostItem from './pages/PostItem';

const Content = styled.div`
  position: relative;
`;

const App = () => {
  //   const [factoryData, setFactoryData] = useState([]);
  const [warehouseData, setWarehouseData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const [newSKU, setNewSKU] = useState('');
  const [newQuantity, setNewQuantity] = useState('');
  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [editSKU, setEditSKU] = useState('');
  const [editQuantity, setEditQuantity] = useState('');
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');
  //   const { warehouseId } = useParams();

  //   console.log(warehouseId);
  const history = useHistory();

  //   useEffect(() => {
  //     const fetchFactory = async () => {
  //       try {
  //         const response = await api.get('./factories');
  //         // console.log(response)
  //         setFactoryData(response.data);
  //       } catch (err) {
  //         if (err.response) {
  //           // not in the 200 response rangeπ
  //           console.log(err.response.data);
  //           console.log(err.response.status);
  //           console.log(err.response.headers);
  //         } else {
  //           console.log(`Error: ${err.message}`);
  //         }
  //       }
  //     };
  //     fetchFactory();
  //   }, []);

  useEffect(() => {
    const fetchWarehouse = async () => {
      try {
        const response = await api.get('./warehouses');
        // console.log(response)
        setWarehouseData(response.data);
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
    fetchWarehouse();
  }, []);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await api.get('./inventoryItems');
        // console.log(response)
        setInventoryData(response.data);
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
  }, []);

  console.log(editName);
  const handleEdit = async (inventoryItemId) => {
    const updateInventory = {
      id: 15,
      warehouseId: 0,
      itemSKU: '444',
      itemQuantity: '5555',
      itemName: 'Test',
      itemDescription: 'hiii',
    };
    try {
      const response = await api.put(`/inventoryItems/15`, updateInventory);
      setInventoryData(
        inventoryData.map((item) =>
          item.id === inventoryItemId ? { ...response.data } : item
        )
      );
      setEditSKU('');
      setEditQuantity('');
      setEditName('');
      setEditDescription('');
      history.push('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/inventoryItems/${id}`);
      const inventoryList = inventoryData.filter((item) => item.id !== id);
      setInventoryData(inventoryList);
      history.push('/inventory');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <div>
      <Header />
      <Content>
        <Router>
          <Switch>
            <Route exact path="/inventoryItems/:inventoryItemId">
              <EditInventory
                inventoryData={inventoryData}
                editSKU={editSKU}
                setEditSKU={setEditSKU}
                editQuantity={editQuantity}
                setEditQuantity={setEditQuantity}
                editName={editName}
                setEditName={setEditName}
                editDescription={editDescription}
                setEditDescription={setEditDescription}
                handleEdit={handleEdit}
              />
            </Route>
            <Route exact path="/warehouses/:warehouseId/inventoryItems">
              <Inventory data={warehouseData} />
            </Route>
            {/* <Route exact path="/factories/:factories/machienes">
            <Machiene data={factoryData} />
          </Route>
          <Route exact path="/factories/:factoryId">
            <Factory data={factoryData} />
          </Route> */}
            <Route exact path="/warehouses/:warehouseId">
              <Warehouse data={warehouseData} />
            </Route>
            <Route exact path="/warehouses">
              <Warehouses data={warehouseData} />
            </Route>
            {/* <Route exact path="/inventory/:invertoryId">
            <Inventory data={inventoryData} />
          </Route> */}
            <Route exact path="/newInventory">
              <NewInventory
                data={inventoryData}
                newSKU={newSKU}
                setNewSKU={setNewSKU}
                newQuantity={newQuantity}
                setNewQuantity={setNewQuantity}
                newName={newName}
                setNewName={setNewName}
                newDescription={newDescription}
                setNewDescription={setNewDescription}
              />
            </Route>
            <Route exact path="/edit">
              <PostItem
                inventoryData={inventoryData}
                //   handleDelete={handleDelete}
              />
            </Route>
            {/* <Route exact path="/inventory">
            <Inventory data={inventoryData} />
          </Route> */}
            {/* <Route exact path="/factories">
            <Factories data={factoryData} />
          </Route> */}
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Content>
      <Footer />
    </div>
  );
};
export default App;
