import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

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
