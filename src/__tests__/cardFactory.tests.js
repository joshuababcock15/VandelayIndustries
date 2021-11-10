import React from 'react';
import renderer from 'react-test-renderer';
import CardFactory from '../components/CardFactory';

describe('CardFactory', () => {
  const tree = renderer.create(<CardFactory name="Newark Latex Mfg." />);
  const testInstance = tree.toJSON();

  test('Matches snapshot', () => {
    expect(testInstance).toMatchSnapshot();
  });

  test('default props', () => {
    const testRenderer = renderer.create(
      <CardFactory
        name="Newark Latex Mfg."
        description="Key East Coast facility"
        buildingName="Newark Latex"
        city="Bronx"
        country="USA"
        state="NY"
        streetLine="173 E 161 St"
        zipcode="10451"
        link="Learn more"
        linkRef="/home"
      />
    );
    const testInstances = testRenderer.root;
    expect(testInstances.props.name).toBe('Newark Latex Mfg.');
    expect(testInstances.props.description).toBe('Key East Coast facility');
    expect(testInstances.props.buildingName).toBe('Newark Latex');
    expect(testInstances.props.city).toBe('Bronx');
    expect(testInstances.props.country).toBe('USA');
    expect(testInstances.props.state).toBe('NY');
    expect(testInstances.props.streetLine).toBe('173 E 161 St');
    expect(testInstances.props.zipcode).toBe('10451');
    expect(testInstances.props.link).toBe('Learn more');
    expect(testInstances.props.linkRef).toBe('/home');
  });
});
