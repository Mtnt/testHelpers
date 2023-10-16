export const allValuesTypes = {
  STRING: 'string',
  NUMBER: 'number',
  INFINITY: 'infinity',
  BOOLEAN: 'boolean',
  ARRAY: 'array',
  PLAIN_OBJECT: 'plain object',
  FUNCTION: 'function',
  UNDEFINED: 'undefined',
  NULL: 'null',
  SYMBOL: 'symbol',
} as const;

export const valuesMap = {
  [allValuesTypes.STRING]: ['foo', '', '0', 'false', 'true'],
  [allValuesTypes.NUMBER]: [-1, 0, 1],
  [allValuesTypes.INFINITY]: [Infinity, -Infinity],
  [allValuesTypes.BOOLEAN]: [true, false],
  [allValuesTypes.ARRAY]: [[], [1, 2, 'foo']],
  [allValuesTypes.PLAIN_OBJECT]: [{}, { foo: 'bar', bar: 'foo' }],
  [allValuesTypes.FUNCTION]: [function () {}],
  [allValuesTypes.UNDEFINED]: [undefined],
  [allValuesTypes.NULL]: [null],
  [allValuesTypes.SYMBOL]: [Symbol('testLocalSymbol'), Symbol.for('testGlobalSymbol')],
};
