import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CardGroup } from 'reactstrap';
import CardFactory from '../components/CardFactory';
import SectionTitle from '../components/SectionTitle';

const propTypes = {
  data: PropTypes.array,
};

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Factories = (props) => {
  const { data } = props;
  return (
    <div>
      <SectionTitle title=" Want to talk about efficiency.  Our Factories below are the best around." />
      <CardWrapper>
        {data.map((item, id) => (
          <CardGroup key={id}>
            <CardFactory
              name={item?.factoryName}
              description={item?.factoryDescription}
              buildingName={item?.factoryAddress?.buildingName}
              city={item?.factoryAddress?.city}
              country={item?.factoryAddress?.country}
              state={item?.factoryAddress?.stateProvince}
              streetLine={item?.factoryAddress?.streetLine1}
              zipcode={item?.factoryAddress?.zipPostalCode}
              link={`Learn more about ${item?.factoryAddress?.buildingName}`}
              linkRef={`/factories/${item?.id}`}
            />
          </CardGroup>
        ))}
      </CardWrapper>
    </div>
  );
};

Factories.propTypes = propTypes;

export default Factories;
