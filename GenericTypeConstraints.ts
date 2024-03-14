// Generic Type Constraints kind of sets up a requirement or a limitation
// around a generic type.

// extends object is a generic type constraint.
// we're putting a requirement around the types T and U
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const output8 = merge({ id: '1111' }, { color: 'red' });

// 'extends' there means 'must be'
