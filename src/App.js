import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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

const Content = styled.div`
  position: relative;
`;

const App = () => {
  const [warehouseData, setWarehouseData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);

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

  return (
    <div>
      <Header />
      <Content>
        <Router>
          <Switch>
            <Route exact path="/inventoryItems/:inventoryItemId">
              <EditInventory inventoryData={inventoryData} />
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
