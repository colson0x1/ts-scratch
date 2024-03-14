function randomElement<T>(arr: T[]) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

const out = randomElement<number>([1, 2, 3]);
const out2 = randomElement<string>(['a', 'b', 'c']);
