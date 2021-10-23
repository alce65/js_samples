// import { factorial } from './factorial';
const { factorial } = require('./factorial.js');

describe('Factorial function', () => {
  test('should be 1 if n = 0', () => {
    const value = 0;
    const result = factorial(value);
    expect(result).toBe(1);
  });

  test('should be 1 if n = 1', () => {
    const value = 1;
    const result = factorial(value);
    expect(result).toBe(1);
  });

  test('should be 120 if n = 5', () => {
    const value = 5;
    const result = factorial(value);
    expect(result).toBe(120);
  });

  test('should throw error if n = -1', () => {
    const value = -1;
    // expect(factorial(value)).toThrow();
    expect(() => factorial(value)).toThrow();
    expect(() => factorial(value)).toThrow(
      'No existe factoriales de números negativo'
    );
  });

  test('should throw error if n = 1.5', () => {
    expect(() => factorial(1.5)).toThrowError();
    expect(() => factorial(1.5)).toThrowError(
      'No existen factoriales de números decimales'
    );
  });
});
