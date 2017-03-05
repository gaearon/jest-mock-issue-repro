var res = require('./index');

// These two lines refer to the same file but behave differently:
// jest.mock('a', () => 'goodbye, ');
jest.mock('./a', () => 'goodbye, ');
// (If you think "wtf", notice I set NODE_PATH in package.json)

test('wat', () => {
  expect(res).toEqual('goodbye, world!');
});