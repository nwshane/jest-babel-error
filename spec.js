import sum from './index'

describe('sum', () => {
  test('correctly adds 1 and 1', () => {
    expect(sum(1, 1)).toEqual(2)
  })
})
