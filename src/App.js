import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Factories from './pages/Factories';
import Warehouses from './pages/Warehouses';
import Factory from './pages/Factory';
import Warehouse from './pages/Warehouse';
import Inventory from './pages/Inventory';

const App = () => (
  <div className="App container">
    <Router>
      <Switch>
        <Route
          exact
          path="/warehouses/:warehouseId/inventory-items"
          component={Inventory}
        />
        <Route exact path="/factories/:factoryId" component={Factory} />
        <Route exact path="/warehouses/:warehouseId" component={Warehouse} />
        <Route exact path="/warehouses" component={Warehouses} />
        <Route exact path="/factories" component={Factories} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </div>
);
export default App;
