import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Factories from './pages/Factories';
import Warehouses from './pages/Warehouses';
import Factory from './pages/Factory';
import Warehouse from './pages/Warehouse';
import Inventory from './pages/Inventory';
import api from './api/factories';
import Header from './components/Header';
import Machiene from './pages/Machiene';

const App = () => {
  const [factoryData, setFactoryData] = useState([]);
  const [warehouseData, setWarehouseData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
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
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
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
    fetchPosts();
  }, []);

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
