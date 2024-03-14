// step 2: update function defination to receive generic types
function toRecord<TypeOfId>(id: TypeOfId, value: string) {
  return {
    id,
    value,
  };
}

// step 1: give type argument
const resultA = toRecord<number>(1111, 'stillhome@stillhome.com');
const resultB = toRecord<string>('a1b1c1d1', 'nyc@nyc.com');

// generic are just like function arguments
// they really behaves the same way
