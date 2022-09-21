import { render } from "@testing-library/react";
import App from '../App';

describe('Testing rendering of App', () => {
  test('rendering App', () => {
    render(<App />);
  });
});