const expect = require('chai').expect;
// import { } from 'ramda';

const keys = ['id', 'f2', 'f3', 'f4', 'f5'];
const vals1 = ['123', 'TRUE', '', 'FALSE', 'data'];
const vals2 = ['345', 'TRUE', 'other data', 'TRUE', ''];
const vals3 = ['456', '', '', '', 'yeah'];

const obj1 = {
  id: 123,
  f2: true,
  f4: false,
  f5: 'data'
};

const obj2 = {
  id: 345,
  f2: true,
  f3: 'other data',
  f4: true
};

const obj3 = {
  id: 456,
  f5: 'yeah'
};

const transform = (keys, vals) => null;

describe('ex1', () => {
  it.skip('should build obj1', () => {
    expect(transform(keys, vals1)).to.deep.equal(obj1);
    expect(transform(keys, vals2)).to.deep.equal(obj2);
    expect(transform(keys, vals3)).to.deep.equal(obj3);
  })
})
