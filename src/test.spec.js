const expect = require('chai').expect;
import { concat } from 'ramda';

describe('todo actions', () => {
  it('should handle initial state', () => {
    expect(concat(['a'], ['b'])).to.deep.equal(['a', 'b']);
  })
})
