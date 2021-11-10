import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import CardAbout from '../components/CardAbout';
import { FactoryData } from '../data/factoryData';

const propTypes = {
  data: PropTypes.array,
};

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const WarehouseContent = styled.div`
  display: flex;
  justify-content: center;
  background-color: #93b1a7;
  text-align: center;
  padding: 40px 0;
`;

const Factory = (props) => {
  const { factoryId } = useParams();
  const { data } = props;

  const factoryData = FactoryData.data[factoryId];

  return (
    <div>
      <WarehouseContent>
        <TextWrapper>
          <h1>{data[factoryId]?.factoryName}</h1>
          <Link to={`/factories/${factoryId}/machines`}>
            <Button size="sm" className="mr-2">
              Check out the list of machines
            </Button>
          </Link>
        </TextWrapper>
      </WarehouseContent>
      <CardAbout
        title={factoryData?.title}
        subtitle={factoryData?.subtitle}
        listTitle={factoryData?.listTitle}
        lists={factoryData?.lists}
        imageAlt={factoryData?.imageAlt}
        imageSrc={factoryData?.imageSrc}
      />
    </div>
  );
};

Factory.propTypes = propTypes;

export default Factory;
