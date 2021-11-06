import React from 'react';
import { useParams } from 'react-router-dom';

const Factory = () => {
    const { factoryId } = useParams();
    console.log(factoryId)

    return (
        <div>
            <h1>
                Factory {factoryId}!
            </h1>
        </div>
    )
}

export default Factory;
