import React from 'react';
import renderer from 'react-test-renderer';
import View from './View';

test('renders a view video component', () => {
  const component = renderer.create(
    <View data={{ url: 'https://www.reddit.com/.rss' }} />,
  );
  const json = component.toJSON();
  expect(json).toMatchSnapshot();
});
