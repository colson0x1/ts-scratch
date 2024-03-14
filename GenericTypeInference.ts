// generic type inference feature
function wrapInArray<TypeOfValue>(value: TypeOfValue): TypeOfValue[] {
  return [value];
}

// TS automatically detects type of these variables correctly
const res = wrapInArray('stillhome');
const res2 = wrapInArray('1111');

// generic type inference is used a lot around react hooks
