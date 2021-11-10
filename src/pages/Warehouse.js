import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { Button, UncontrolledCarousel } from 'reactstrap';
import { ImageData } from '../data/warehouseData';

const imageData = ImageData.data[0];
const imageDataTwo = ImageData.data[1];

const propTypes = {
  data: PropTypes.array,
};

const Warehouse = (props) => {
  const { data } = props;

  const { warehouseId } = useParams();
  const warehouseData = data[warehouseId];

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(open);
  }, [open]);

  const CarouselWrapper = styled.div`
    padding: 0 40px;
  `;

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

  const _renderCarousel = () => (
    <CarouselWrapper>
      <UncontrolledCarousel
        items={[
          {
            altText: 'Slide 1',
            key: 1,
            src:
              warehouseId === '1'
                ? imageDataTwo?.imageSrc
                : imageData?.imageSrc,
          },
          {
            altText: 'Slide 2',
            key: 2,
            src:
              warehouseId === '1'
                ? imageDataTwo?.imageSrcTwo
                : imageData?.imageSrcTwo,
          },
          {
            altText: 'Slide 3',
            key: 3,
            src:
              warehouseId === '1'
                ? imageDataTwo?.imageSrcThree
                : imageData?.imageSrcThree,
          },
        ]}
      />
    </CarouselWrapper>
  );

  return (
    <div>
      <WarehouseContent>
        <TextWrapper>
          <h1>{warehouseData?.warehouseName}</h1>
          <p>Name a latex item and we got it for you!</p>
          <Link to={`/warehouses/${warehouseId}/inventoryItems`}>
            <Button color="success" size="sm" className="mr-2">
              Check out the Inventory
            </Button>
          </Link>
        </TextWrapper>
      </WarehouseContent>
      {_renderCarousel()}
    </div>
  );
};

Warehouse.propTypes = propTypes;

export default Warehouse;
