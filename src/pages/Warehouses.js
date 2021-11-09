import React, { useEffect, useState } from 'react';
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

const Warehouses = (props) => {
  const { data } = props;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(open);
  }, [open]);

  return (
    <div>
      <SectionTitle title="Check out our warehouses below.  We specialize in latex and bobbleheads." />
      <CardWrapper>
        {data.map((item, id) => (
          <CardGroup key={id}>
            <CardFactory
              name={item?.warehouseName}
              description={item?.warehouseDescription}
              buildingName={item?.warehouseAddress?.buildingName}
              city={item?.warehouseAddress?.city}
              country={item?.warehouseAddress?.country}
              state={item?.warehouseAddress?.stateProvince}
              streetLine={item?.warehouseAddress?.streetLine1}
              zipcode={item?.warehouseAddress?.zipPostalCode}
              link={`Learn more about ${item?.warehouseAddress?.buildingName}`}
              linkRef={`/warehouses/${item?.id}`}
            />
          </CardGroup>
        ))}
      </CardWrapper>
    </div>
  );
};

Warehouses.propTypes = propTypes;

export default Warehouses;
