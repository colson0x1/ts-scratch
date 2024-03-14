function callAndReturn<T>(fn: () => T): T {
  return fn();
}

// we're not providing the generic type when we call the function
// so TypeScript is gonna rely upon generic type inference to figure out
// what's going on here
const outx = callAndReturn<number>(() => 5);
const outy = callAndReturn<string>(() => 'apple');
