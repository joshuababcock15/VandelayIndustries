import React, { useEffect, useState } from 'react';
import { Link,   } from "react-router-dom";
import { Button } from 'reactstrap';
import api from '../api/factories';

const Factories = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get('./factories');
                // console.log(response)
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
    // console.log(posts)
return (
    <div className="App container">
              {posts.map((post, id) => {
                  return (
                    <Link to={`/Factories/${post.factoryId}`}  key={id}>
                        <Button color="success" size="sm" className="mr-2">{post.factoryName}</Button>
                    </Link>

                  )
              })}

    </div>
    );
}

export default Factories;
