interface Image {
  src: string;
}

// a type aliases can be used in many places that interfaces can be used
// and in addition to that, they're kind of interchangeable
// so this Image interface up there, we could also define using type alias
type NewImage = {
  src: string;
};
// When to use an interface and when to use a type i.e alias
// We're going to use interfaces anytime we're trying to describe a plain
// object.
// We're also going to use interfaces anytime that we want to extend one
// type with another because type alias cannot be extended
// We're going to use type aliases very often whenever we need to compute
// a new type. That's not really good equivalent way of doing something
// like this with an interface.
// Interface - when we're trying to describe a plain objects
// Type aliases - when we're trying to describe computed values

// type alias
// this makes a brand new type that we can use anywhere inside of our codebase
// i.e inside scope of this current file
type LoggableValue = string | number | string[] | Image;

function logValue(value: LoggableValue) {}
