function collect<T extends keyof U, U extends object>(key: T, arr: U[]) {
  return arr.map((el) => el[key]);
}

// Type U represents the type of each object inside this array
// Type T represents all the possible keys of those U objects
// in this particular case, the only valid keys are count and name
const process = collect('name', [
  { count: 0, name: 'colson' },
  { count: 1, name: 'stillhome' },
]);
