interface UserProfile {
  likes: string[];
}

interface User {
  id: string;
  username: string;
  // if we do it like this, it means, in order to be a User, we must have a
  // profile defined
  // adding `?` makes this property optional
  // meaning: User object might have a profile or it might not
  profile?: UserProfile;
}

const user: User = {
  id: '1111',
  username: 'stillhome',
  profile: {
    likes: ['cats'],
  },
};

// when try to access likes on profile property, we get an error which says
// profile might be undefined because `profile` is an optional property
// its not guarantted to exist
/* user.profile.likes */
// i.e undefine.likes : we get classic JS error:
// cannot reference property likes on undefined
// So before we can access this profile property and refer to anything on it,
// we need to make sure that a profile exists
// Two ways we can do this:
// Either using an if statement
// OR using ?

// using if statement
if (user.profile) {
  // inside of here, because user.profile is Truthy, that means that must
  // not be undefined
  user.profile.likes;
}

// using ?
// ? says make sure that profile actually exists and if it is defined,
// then go ahead and try to access likes otherwise
// if profile is undefined, then .likes will not be executed at all
user.profile?.likes;

// we can also use optional property in a function too
function logValue(value: string, message?: string) {
  if (message) {
    console.log(message, value);
  } else {
    console.log(value);
  }
}

logValue('colson');
logValue('colson', ' will become a millionaire! ');
