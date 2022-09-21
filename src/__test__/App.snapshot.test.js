import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

describe('Jest snapshot to test components', () => {
  test('Matches DOM Snapshot', () => {
    const domTree = renderer
      .create(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
      )
      .toJSON();

    expect(domTree).toMatchSnapshot();
  });
});