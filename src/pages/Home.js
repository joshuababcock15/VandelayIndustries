import React from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="App container">
            <Table>
            <tbody>
                <tr>
                <td>Home</td>
                <td></td>
                <td></td>
                <td>
                    <Link to="/Factories">
                        <Button color="success" size="sm" className="mr-2" onClick={() => console.log('go bills')}>Factories</Button>
                    </Link>
                    <Link to="/Warehouses">
                        <Button color="danger" size="sm">Warehouses</Button>
                    </Link>
                </td>
                </tr>
            </tbody>
            </Table>
        </div>
    );
}

export default Home;
