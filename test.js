const assert = require('assert');

Object.freeze(assert);
const sumOfOther = require('./src/sumOfOther.js');

describe('test for sumOfOther(array)', () => {
  it('at [2, 3, 4, 1], should return [8, 7, 6, 9]', () => {
    assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
  });

  it('at [5, 14, 12, 3], should return [29, 20, 22, 31]', () => {
    assert.deepEqual(sumOfOther([5, 14, 12, 3]), [29, 20, 22, 31]);
  });

  it('at [7, 1, 2, 15, 6, 99, 75, 5], should return [203, 209, 208, 195, 204, 111, 135, 210]', () => {
    assert.deepEqual(sumOfOther([7, 1, 2, 15, 6, 99, 75, 5]),
      [203, 209, 208, 195, 204, 111, 135, 205]);
  });

  it('at [], should return []', () => {
    assert.deepEqual(sumOfOther([]),
      []);
  });
});
