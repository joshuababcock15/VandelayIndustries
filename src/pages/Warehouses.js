import React, { useEffect, useState } from 'react';
import { Table, Button } from 'reactstrap';
import api from '../api/factories';

const Warehouses = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get('./warehouses');
                console.log(response)
                setPosts(response.data);
            } catch (err) {
                if (err.response) {
                // not in the 200 response range
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`)
                }
            }
        }
        fetchPosts()
    }, [])

//   state = {
//     warehouses: []
//   }

    // axios.get('http://localhost:3000/warehouses')
return (
    <div className="App container">
        <Table>
        <thead>
            <tr>
              {posts.map((post, id) => <td key={id}>{post.title}</td>)}
            </tr>
        </thead>

        <tbody>
            <tr>
            <td>warehouses</td>
            <td></td>
            <td></td>
            <td>
                <Button color="success" size="sm" className="mr-2">Edit</Button>
                <Button color="danger" size="sm">Delete</Button>
            </td>
            </tr>
        </tbody>
        </Table>
    </div>
    );
}

export default Warehouses;
