import { render, screen } from '@testing-library/react';
import Quote from '../components/quote';

describe('Testing Quote Component', () => {
  test('testing quote', () => {
    render(<Quote />);

    // eslint-disable-next-line testing-library/await-async-query
    expect(screen.findByText('Mathematics is not about number, Equations, computations, or Algorithms: it is about Understanding. -William Paul Thurston')).toMatchSnapshot();
  });
});