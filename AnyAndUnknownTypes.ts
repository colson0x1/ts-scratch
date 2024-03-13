// when we have a variable of type `any` but we're pretty sure what its
// actual type is, we can use what reffers to as a type assertion
interface Book {
  title: string;
}

async function fetchBook() {
  const res = await fetch('/book');
  // when we get back response, we need to extract data out of it
  const data = await res.json();
  // data is the book that we fetched from API
  // data is of type ANY

  // Using Type Assertion to tell TypeScript for type ANY
  // It tells TS, look we know this thing is of type any but just trust us,
  // we're pretty sure it is a book object and has all the properties that
  // book usually would
  return data as Book;
}

async function run() {
  // now book here is of type Book
  const book = await fetchBook();
}

// In reality, there is no guarantee that we're getting back of type Book
// from the API we're fetching like we might be putting wrong path on the fetch
// we might not actually truly get back the book object that we were expecting
// so to handle that, kind of counter party to type ANY called type UNKNOWN
// Unknon is kind of like the much stricter version of ANY
// If we mark a variable as type Unknown, it tells TypeScript that this variable
// can be anything and TS is not going to allows us to access any properties on
// that variable or make any assumptions about it until we do some really
// aggressive type narrowing.
// So we end up having to write out several different type guards just to
// verify that a unknown variable is of the type that we think that it might be
