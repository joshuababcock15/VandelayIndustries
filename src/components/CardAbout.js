import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CardBody, CardTitle, CardSubtitle, Card, List } from 'reactstrap';

const propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  listTitle: PropTypes.string,
  lists: PropTypes.array,
};

const defaultProps = {};

const CardWrapper = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  justify-content: space-evenly;
`;
const ContentWrapper = styled.div`
  max-width: 400px;
`;

const CardAbout = (props) => {
  const { title, subtitle, imageSrc, imageAlt, listTitle, lists } = props;

  return (
    <CardWrapper>
      <Card color="light">
        <ContentWrapper>
          <CardBody>
            <CardTitle tag="h5">{title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {subtitle}
            </CardSubtitle>
            <List type="unstyled">
              <li>
                {listTitle}
                <ul>
                  {lists &&
                    lists.map((item, index) => (
                      <li key={index}>{item?.list}</li>
                    ))}
                </ul>
              </li>
            </List>
          </CardBody>
        </ContentWrapper>
      </Card>
      <img alt={imageAlt} src={imageSrc} width="30%" />
    </CardWrapper>
  );
};

CardAbout.propTypes = propTypes;
CardAbout.defaultProps = defaultProps;

export default CardAbout;
