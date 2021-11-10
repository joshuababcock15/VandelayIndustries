import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';
import api from '../api/factories';

const PageWrapper = styled.div`
  padding: 0 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Machine = () => {
  const { factoryId } = useParams();
  const [machines, setMachines] = useState();

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await api.get(`factories/${factoryId}/machines`);
        setMachines(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchInventory();
  }, [factoryId]);

  const _renderMachines = () => {
    if (!machines) return null;
    return (
      <>
        {machines.map((items, index) => (
          <tbody key={index}>
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{items?.machineName}</td>
              <td>{items?.machineDescription}</td>
              <td>
                <ButtonWrapper>
                  <Link to={`/factories/${items?.factoryId}`}>
                    <Button size="large" color="primary">
                      Go back to Factories
                    </Button>
                  </Link>
                </ButtonWrapper>
              </td>
            </tr>
          </tbody>
        ))}
      </>
    );
  };

  return (
    <PageWrapper>
      <h1>Machines:</h1>
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Machine</th>
            <th>Description</th>
          </tr>
        </thead>
        {_renderMachines()}
      </Table>
    </PageWrapper>
  );
};

export default Machine;
