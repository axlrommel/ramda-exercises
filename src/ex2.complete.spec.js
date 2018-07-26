const expect = require('chai').expect;
import { filter, without, concat, pathEq } from 'ramda';

const initialState = [
  { items: { _id: '1', b: 'a' } },
  { items: { _id: '2', b: 'b' } }
];

const findItem = (state, it) =>
  filter(pathEq(['items', '_id'], it.items._id), state);

const add = (state, item) => {
  const existingItem = findItem(state, item);
  return existingItem === undefined
    ? concat(state, [item]) : concat([item], without(existingItem, state));
};

const remove = (state, item) => {
  const existingItem = findItem(state, item);
  return existingItem === undefined
    ? state : without(existingItem, state);
};

describe.only('ex2', () => {
  it('should remove only if exists', () => {
    expect(remove(initialState,
      { items: { _id: '1', b: 'a' } })).to.deep.equal(
        [{ items: { _id: '2', b: 'b' } }]);
    expect(remove(initialState,
      { items: { _id: '3', b: 'a' } })).to.deep.equal(
        initialState);
  })
  it('should add if not there', () => {
    const newState = add(initialState,
      { items: { _id: '3', b: 'd' } })
    expect(newState).to.have.lengthOf(3);
    expect(newState).to.deep.include(
      { items: { _id: '1', b: 'a' } });
    expect(newState).to.deep.include(
      { items: { _id: '2', b: 'b' } });
    expect(newState).to.deep.include(
      { items: { _id: '3', b: 'd' } });
  })
  it('should replace if there', () => {
    const newState = add(initialState,
      { items: { _id: '1', b: 'd' } })
    expect(newState).to.have.lengthOf(2);
    expect(newState).to.deep.include(
      { items: { _id: '1', b: 'd' } });
    expect(newState).to.deep.include(
      { items: { _id: '2', b: 'b' } });
  })
})