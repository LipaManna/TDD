const { add } = require('./calculator')

test('returns 0 for empty string', () => {
  expect(add('')).toBe(0)
})

test('properly adds numbers separated by commas', () => {
  expect(add('1,2,3')).toBe(6)
})

test('supports different delimiters', () => {
  expect(add('1\n2,3')).toBe(6)
})

test('throws error for negative numbers', () => {
  expect(add('-4,7')).toBe('negative numbers not allowed -4')
})
