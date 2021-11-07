import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import Home from './pages/Home';
import Factories from './pages/Factories';
import Warehouses from './pages/Warehouses';
import Factory from './pages/Factory';
import Warehouse from './pages/Warehouse';
import Inventory from './pages/Inventory';
import api from './api/factories';
import Header from './components/Header';
import Machiene from './pages/Machiene';
import EditInventory from './pages/EditInventory';
import NewInventory from './pages/NewInventory';
import PostItem from './pages/PostItem';

const App = () => {
  const [factoryData, setFactoryData] = useState([]);
  const [warehouseData, setWarehouseData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const [newSKU, setNewSKU] = useState('');
  const [newQuantity, setNewQuantity] = useState('');
  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [editSKU, setEditSKU] = useState('');
  const [editQuantity, setEditQuantity] = useState('');
  const [editName, setEditName] = useState(newName);
  const [editDescription, setEditDescription] = useState('');

  const history = useHistory();

  useEffect(() => {
    const fetchFactory = async () => {
      try {
        const response = await api.get('./factories');
        // console.log(response)
        setFactoryData(response.data);
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
    fetchFactory();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = inventoryData.length
      ? inventoryData[inventoryData.length - 1].id + 1
      : 1;

    console.log(id);
    const newInventory = {
      id,
      itemSKU: newSKU,
      itemQuantity: newQuantity,
      itemName: newName,
      itemDescription: newDescription,
    };
    try {
      const response = await api.post('/inventoryItems', newInventory);
      const allInventory = [...inventoryData, response.inventoryData];
      setInventoryData(allInventory);
      setNewSKU('');
      setNewQuantity('');
      setNewName('');
      setNewDescription('');
      //   history.push('/inventory');
      // fix this
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleEdit = async (id) => {
    const updateInventory = {
      id,
      itemSKU: editSKU,
      itemQuantity: editQuantity,
      itemName: editName,
      itemDescription: editDescription,
    };
    try {
      const response = await api.put(`/inventoryItems/${id}`, updateInventory);
      setInventoryData(
        inventoryData.map((item) =>
          item.id === id ? { ...response.data } : item
        )
      );
      setEditSKU('');
      setEditQuantity('');
      setEditName('');
      setEditDescription('');
      //   history.push('/inventory');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/inventoryItems/${id}`);
      const inventoryList = inventoryData.filter((item) => item.id !== id);
      setInventoryData(inventoryList);
      //   history.push('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <div className="App container">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/warehouses/:warehouseId/inventory-items">
            <Inventory data={warehouseData} />
          </Route>
          <Route exact path="/factories/:factories/machienes">
            <Machiene data={factoryData} />
          </Route>
          <Route exact path="/factories/:factoryId">
            <Factory data={factoryData} />
          </Route>
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
              handleSubmit={handleSubmit}
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
          <Route exact path="/edit/:id">
            <EditInventory
              inventoryData={inventoryData}
              handleEdit={handleEdit}
              setEditSKU={setEditSKU}
              editSKU={editSKU}
              setEditQuantity={setEditQuantity}
              setEditName={setEditName}
              editName={editName}
              setEditDescription={setEditDescription}
              editDescription={editDescription}
            />
          </Route>
          <Route exact path="/inventory/:id">
            <PostItem
              inventoryData={inventoryData}
              handleDelete={handleDelete}
            />
          </Route>
          <Route exact path="/inventory">
            <Inventory data={inventoryData} />
          </Route>
          <Route exact path="/factories">
            <Factories data={factoryData} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
