import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';

import Edit from './Edit';

const mockStore = configureStore();

test('renders an edit listing tile component', () => {
  const store = mockStore({
    intl: {
      locale: 'en',
      messages: {},
    },
    search: {
      subrequests: {},
    },
  });
  const component = renderer.create(
    <Provider store={store}>
      <Edit
        data={{ selectedItem: '/test' }}
        selected={false}
        tile="1234"
        onChangeTile={() => {}}
        onSelectTile={() => {}}
        onDeleteTile={() => {}}
      />
    </Provider>,
  );
  const json = component.toJSON();
  expect(json).toMatchSnapshot();
});