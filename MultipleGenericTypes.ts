function toRecord<T, U>(id: U, value: T) {
  return {
    id,
    value,
  };
}

const output1 = toRecord<string, number>(1111, 'stillhome@stillhome.com');
const output2 = toRecord<number[], string>('a1b1c1d1', [1, 2, 3]);

// order in which we pass these generic types could be anything that we want
// it does not have to match the order of our function arguments
