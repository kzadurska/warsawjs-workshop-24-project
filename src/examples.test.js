import { add } from './examples'

describe('add method', () => {
  test('add 1 + 2', () => {
    const expectedResult = 3
    const result = add(1, 2)
    expect(result).toEqual(expectedResult)
  })

  test.skip('add 12 + 2', () => {
    const expectedResult = 14
    const result = add(12, 2)
    expect(result).toEqual(expectedResult)
  })
  // Will fire only this test
  // test.only('add 14 + 2', () => {
  //   const expectedResult = 16
  //   const result = add(14, 2)
  //   expect(result).toEqual(expectedResult)
  // })

})
// Works in newer version
describe.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])(
  '.add(%i, %i)',
  (a, b, expected) => {
    test(`returns ${expected}`, () => {
      expect(a + b).toBe(expected);
    });

    test(`returned value not be greater than ${expected}`, () => {
      expect(a + b).not.toBeGreaterThan(expected);
    });

    test(`returned value not be less than ${expected}`, () => {
      expect(a + b).not.toBeLessThan(expected);
    });
  },
);

// describe('error handling', () => {
//   test('throws error', () => {
//     expect(() => throw new Error()).toThrow()
//   })
// })