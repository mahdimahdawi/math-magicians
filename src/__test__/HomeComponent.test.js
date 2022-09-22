import { render, screen } from '@testing-library/react';
import Home from '../components/home';
/*eslint-disable */
describe('Testing Home Component', () => {
  test('testing home', () => {
    render(<Home />);

    // eslint-disable-next-line testing-library/await-async-query
    expect(screen.findByText('Welcome To Our Page !')).toMatchSnapshot();
  });
});