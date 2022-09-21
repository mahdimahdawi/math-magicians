import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../components/header';

describe('Testing Header Component', () => {
  test('Testing that all the links are present and rendered', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    expect(screen.getByText('Home')).toMatchSnapshot();
    expect(screen.getByText('Calculator')).toMatchSnapshot();
    expect(screen.getByText('Quote')).toMatchSnapshot();
  });

  test('navigate to Home Page', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    fireEvent.click(screen.getByText('Home'));

    expect(screen.getByText('Home')).toMatchInlineSnapshot(`
<a
  aria-current="page"
  class="menu-link active"
  href="/"
>
  Home
</a>
`);
  });

  test('navigate to Calculator Page', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    fireEvent.click(screen.getByText('Calculator'));

    expect(screen.getByText('Calculator')).toMatchInlineSnapshot(`
<a
  aria-current="page"
  class="menu-link active"
  href="/calculator"
>
  Calculator
</a>
`);
  });

  test('navigate to Quote Page', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    fireEvent.click(screen.getByText('Quote'));

    expect(screen.getByText('Quote')).toMatchInlineSnapshot(`
<a
  aria-current="page"
  class="menu-link active"
  href="/quote"
>
  Quote
</a>
`);
  });
});