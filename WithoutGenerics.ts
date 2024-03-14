// Generics
// Generies makes it easier to write functions, interfaces, classes, types
// and more that work that work with multiple different types

// No generics
// function wrapInArray(value: string): string[] {
//   return [value];
// }
//
// const result = wrapInArray('stillhome');
// error on this when trying to use number
// const result2 = wrapInArray(1111);

// solutions
// function wrapInArray(value: string | number): (string | number)[] {
//   return [value];
// }
//
// const result = wrapInArray('stillhome');
// const result2 = wrapInArray(1111);
// it solves the issue but big downsides
// result gives either an string or an number inside of an array
// that's not really accurate
// we know it should give an array of strings
// same with result2
// this is not a great solution because the return types are not super accurate

// Another way to solve this is make second function that's almost identical
function wrapInArray(value: string): string[] {
  return [value];
}
function wrapNumberInArray(value: number): number[] {
  return [value];
}

const result = wrapInArray('stillhome');
const result2 = wrapNumberInArray(1111);

// now that works, and it got read of our return type problem
// but now we've two functions that are nearly identical
// i.e new names and type they are receiving and returning
// So either of these solutions:
// Using the type union or duplicating the function
// both of them are super akward so we need a better way that we kind of
// some how put in different kinds of values into this function and get back
// some appropriate return type
// that's where Generics can come into play
