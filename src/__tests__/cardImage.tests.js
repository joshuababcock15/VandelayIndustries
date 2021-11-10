import React from 'react';
import renderer from 'react-test-renderer';
import CardImage from '../components/CardImage';
import jerry from '../assets/jerry.png';

describe('CardImage', () => {
  const tree = renderer.create(<CardImage title="Vandley Industries" />);
  const testInstance = tree.toJSON();

  test('Matches snapshot', () => {
    expect(testInstance).toMatchSnapshot();
  });

  test('default props', () => {
    const testRenderer = renderer.create(
      <CardImage
        title="Vandley Industries"
        subtitle="subtitle"
        imageSrc={jerry}
        imageAlt="bobblehead"
        link="link here"
        linkRef="/about"
      />
    );
    const testInstances = testRenderer.root;
    expect(testInstances.props.title).toBe('Vandley Industries');
    expect(testInstances.props.subtitle).toBe('subtitle');
    expect(testInstances.props.imageAlt).toBe('bobblehead');
    expect(testInstances.props.imageSrc).toBe(jerry);
    expect(testInstances.props.link).toBe('link here');
    expect(testInstances.props.linkRef).toBe('/about');
  });
});
