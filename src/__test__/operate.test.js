import operate from '../logic/operate';

describe('Test Math Simple Oprations', () => {
  test('Check for Sumation, 2 + 2 Equal 3', () => {
    expect(operate(2, 2, '+')).toEqual('4');
  });
  test('Check for Multiplication, 5 x 5 Eqaul 25', () => {
    expect(operate(5, 5, 'x')).toEqual('25');
  });
  test('Check For Division, 100 ÷ 10 Eauql 10', () => {
    expect(operate(100, 10, '÷')).toMatch('10');
  });
  test('Check For Division, 100 ÷ 10 not Equal to 100', () => {
    expect(operate(100, 10, '÷')).not.toBe(10);
  });
  test('Check for Division by Zero, Digit ÷ zero is not posibble', () => {
    expect(operate(1, 0, '÷')).toMatch('Can\'t divide by 0.');
  });
  test('Check for Subtractions, 20 - 10 Eqaul 10', () => {
    expect(operate(20, 10, '-')).toMatch('10');
  })
  test('Check for Modulas, 9 % 4 eqaul 1', () => {
    expect(operate(9, 4, '%')).toBe('1');
  });
});
