const expect = require('chai').expect;
import { concat } from 'ramda';

describe('check project setup', () => {
  it.skip('dummy test', () => {
    expect(concat(['a'], ['b'])).to.deep.equal(['a', 'b']);
  })
})
