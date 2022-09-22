import calculate from '../logic/calculate';

describe('Test for Calculate', () => {
  test('Check for the sum calculation', () => {
    const obj = {
      total: 10,
      next: 5,
      operation: '+',
    };
    const btnName = '=';
    expect(calculate(obj, btnName)).toEqual({
      next: null,
      operation: null,
      total: '15',
    });
  });
  test('Check for Subtractions', () => {
    const obj = {
      total: 10,
      next: 5,
      operation: '-',
    };
    const btnName = '=';
    expect(calculate(obj, btnName)).toEqual({
      next: null,
      operation: null,
      total: '5',
    });
  });
  test('Check for Multiplication', () => {
    const obj = {
      total: 10,
      next: 5,
      operation: 'x',
    };
    const btnName = '=';
    expect(calculate(obj, btnName)).toEqual({
      next: null,
      operation: null,
      total: '50',
    });
  });
  test('Check for Division', () => {
    const obj = {
      total: 10,
      next: 5,
      operation: '÷',
    };
    const btnName = '=';
    expect(calculate(obj, btnName)).toEqual({
      next: null,
      operation: null,
      total: '2',
    });
  });
  test('Check for modulus', () => {
    const obj = {
      total: 9,
      next: 4,
      operation: '%',
    };
    const btnName = '=';
    expect(calculate(obj, btnName)).toEqual({
      next: null,
      operation: null,
      total: '1',
    });
  });
});
