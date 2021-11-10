import React from 'react';
import renderer from 'react-test-renderer';
import SectionTitle from '../components/SectionTitle';

describe('SectionTitle', () => {
  const tree = renderer.create(
    <SectionTitle title="This is the Section Title" />
  );
  const testInstance = tree.toJSON();

  test('Matches snapshot', () => {
    expect(testInstance).toMatchSnapshot();
  });

  test('default props', () => {
    const testRenderer = renderer.create(
      <SectionTitle title="This is the Section Title" />
    );
    const testInstances = testRenderer.root;
    expect(testInstances.props.title).toBe('This is the Section Title');
  });
});
