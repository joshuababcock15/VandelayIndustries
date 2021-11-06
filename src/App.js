import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from './pages/Home';
import Factories from './pages/Factories';
import Warehouses from './pages/Warehouses';
import Factory from './pages/Factory';


const App = () => {

return (
    <div className="App container">
       <Router>
           <Switch>
           <Route exact path="/Factories/:factoryId">
                   <Factory />
               </Route>
               <Route exact path="/Warehouses">
                   <Warehouses />
               </Route>
               <Route exact path="/Factories">
                   <Factories />
               </Route>
               <Route exact  path="/">
                   <Home />
               </Route>
           </Switch>
       </Router>
    </div>
    );
}
export default App;
