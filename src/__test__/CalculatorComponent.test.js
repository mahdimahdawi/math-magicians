import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('testing Calculator Component', () => {
  test('testing if Calculator Component rendered', () => {
    render(<Calculator />);

    // eslint-disable-next-line testing-library/await-async-query
    expect(screen.findByText('Lets Do Math!')).toMatchSnapshot();
  });

  test('testing AC button click', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText('AC'));

    expect(screen.getByText('AC')).toMatchInlineSnapshot(`
<button
  class="btn-wrapper"
  type="button"
>
  AC
</button>
`);
  });

  test('testing 6 button click', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText('AC'));

    expect(screen.getByText('6')).toMatchInlineSnapshot(`
<button
  class="btn-wrapper"
  type="button"
>
  6
</button>
`);
  });
});