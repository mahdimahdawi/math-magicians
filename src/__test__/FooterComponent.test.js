import { render, screen } from '@testing-library/react';
import Footer from '../components/footer';

describe('Testing Footer Component', () => {
  test('testing footer', () => {
    render(<Footer />);

    // eslint-disable-next-line testing-library/await-async-query
    expect(screen.findAllByTitle('All Right Reserved &copy;')).toMatchSnapshot();
  });
});