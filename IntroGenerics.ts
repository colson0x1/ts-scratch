// Function Generics
function wrapInArray<T>(value: T): T[] {
  return [value];
}

const resultX = wrapInArray<string>('stillhome');
const resultY = wrapInArray<number>(1111);
