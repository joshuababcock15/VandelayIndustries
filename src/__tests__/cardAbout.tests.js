import React from 'react';
import renderer from 'react-test-renderer';
import CardAbout from '../components/CardImage';
import jerry from '../assets/jerry.png';

const listData = {
  lists: [
    {
      list: 'Integrity',
    },
    {
      list: 'Cheapness',
    },
    {
      list: 'Did I mention being cheap',
    },
    {
      list: 'Latex',
    },
  ],
};

describe('CardAbout', () => {
  const tree = renderer.create(<CardAbout title="Vandley Industries" />);
  const testInstance = tree.toJSON();

  test('Matches snapshot', () => {
    expect(testInstance).toMatchSnapshot();
  });

  test('default props', () => {
    const testRenderer = renderer.create(
      <CardAbout
        title="test title"
        subtitle="test subtitle"
        listTitle="list title"
        lists={listData?.lists}
        imageAlt="jerry"
        imageSrc={jerry}
      />
    );
    const testInstances = testRenderer.root;
    expect(testInstances.props.title).toBe('test title');
    expect(testInstances.props.subtitle).toBe('test subtitle');
    expect(testInstances.props.listTitle).toBe('list title');
    expect(testInstances.props.lists).toBe(listData?.lists);
    expect(testInstances.props.imageSrc).toBe(jerry);
    expect(testInstances.props.imageAlt).toBe('jerry');
  });
});
