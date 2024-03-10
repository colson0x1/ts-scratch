// We want to have the ability to only receive two possible options here
// either an image object or an user
// Type narrowing will be challenging because these are both objects
// if we pass image to image object we want to print src property
// and if we pass an a user object, we want to print out the user's
// username property

interface Image {
  src: string;
}

interface User {
  username: string;
}

/* @ Type Predicate
 * We're not gonna see this in projects that often but we'll see it as we
 * start to look at the TypeScript documentation
 * A Type Predicate is something where we can define a separate function
 * that's going to do the type checking for us to narrow down a type
 * i.e A Type Predicate is a function that's going to narrow down a type
 * for us
 * */
// here: `value is User` is the Predicate. It essentially means, hey we did a
// check and if this function returns true than value must be a User. Otherwise
// value is not a User.
function isUser(value: Image | User): value is User {
  // inside this all we have to do is return a boolean
  return 'username' in value;
}

function logOutput(value: Image | User) {
  if (isUser(value)) {
    console.log(value.username);
  } else {
    console.log(value.src);
  }
}

// Note: Predicates aren't used very often but we'll see it in documentations
// here and there

/*
function logOutput(value: Image | User) {
  // Now Need to Type Narrowing to figure out if value is an Image or a User
  // we need to do precise narrowing since both are an object
  // if (typeof value === 'object') {
  //  value
  // }

  // solution: using in operator
  // `in` operator checks to see if a property is defined on an object
  if ('username' in value) {
    // now value is a User object
    console.log(value.username);
  } else {
    // now value is an Image object
    console.log(value.src);
  }
}
*/

logOutput({ src: 'img.jpg' });
logOutput({ username: 'stillhome' });
