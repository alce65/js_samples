// import { strictEquals } from './strict-equals.js';
const { strictEquals } = require('./strict-equals.js');

describe('Test strictEquals', () => {
  test('should be true 3 === 3', () => {
    expect(3 === 3).toBe(true);
  });
});

describe('given the function strictEquals', () => {
  describe('when function strictEquals recieves 1 and 1', () => {
    test('then it returns true', () => {
      //Arrange
      const data1 = 1;
      const data2 = 1;

      //Act
      const result = strictEquals(data1, data2);

      //Assert
      expect(result).toBeTruthy();
    });
  });
});
