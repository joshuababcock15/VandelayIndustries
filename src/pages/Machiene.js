import React from 'react';
import { useParams } from 'react-router-dom';

const Machiene = () => {
  const { machieneId } = useParams();

  // description
  // invertory button
  // add new intertory button

  return (
    <div>
      <h1>Machiene {machieneId}!</h1>
    </div>
  );
};

export default Machiene;
