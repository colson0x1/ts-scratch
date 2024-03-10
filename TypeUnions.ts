/*
 * we don't make two functions like this in real project 
 * instead we create single function and we'll be able to pass it
 * just any kind of value: either number, or string or an array or
 * just about anything else
 * we designate a type that is one of several different types
function printNumber(value: number) {}

function printString(value: string) {}
*/

// here we're defining a function that can receive a single argument
// that might be several different types and we only want to allow those
// types that we defined
// in addition once we received these values, we're going to figure out what
// kind of values they actually are
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

function logOutput(value: string | number | string[] | Image) {}

logOutput('hi there');
logOutput(123);
logOutput(['beautiful', 'world']);
logOutput({ src: 'img.jpg' });
// we get error here when tryin to use boolean since its not in our type union
// logOutput(true)
