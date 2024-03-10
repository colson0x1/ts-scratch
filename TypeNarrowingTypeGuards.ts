// Two thing:
// i. how do we define a function that can receive any of these
// string, number, array of strings, image object
// any of these 4 differnt types
// ii. once we have received that argument, how do we actually figure out
// what we passed into it

// Type Union is new type that we make that combines together several other types
interface Image {
  src: string;
}

function logOutput(value: string | number | string[] | Image) {
  // Type Narrowing
  // now we need to take this value argument and kind of narrow down its type
  // to one of these 4 possible cases
  // In simple, type narrowing is where we take sum of different types and
  // narrow it down into just one very specific type
  // To use Type Narrowing, We use what's reffered to as a Type Guard

  // if value is a string...
  // So inside of this if statement, we need to write out some code that is
  // gonna a hundred percent confirm that value is a string and if value is a
  // string, we can safely call toUpperCase() function on it
  // We added Type Guard on this if statement to do sime Type Narrowing
  // Our Type Guard only gonna return true here is value is a string
  // So TS knows that we only ever gonna get into this if statement if
  // value is a string
  if (typeof value === 'string') {
    value.toUpperCase();
  }

  if (typeof value === 'number') {
    Math.round(value);
  }

  /* if (typeof value === 'object') {
    // value here is: either an Array or an Object
    value
  } */

  // so we use Array.isArray() to check whether its an Array or not
  if (Array.isArray(value)) {
    // Now we have 100% an Array of strings
    value.join('');
  }

  // object can be an object or an array too like an array
  // so further narrowing down the type by putting AND case
  if (typeof value === 'object' && !Array.isArray(value)) {
    value.src;
  }
}

logOutput('hi there');
logOutput(123);
logOutput(['beautiful', 'world']);
logOutput({ src: 'img.jpg' });
// we get error here when tryin to use boolean since its not in our type union
// logOutput(true)
