// when we have a variable of type `any` but we're pretty sure what its
// actual type is, we can use what reffers to as a type assertion
interface Book {
  title: string;
}

// type safe way of accessing our API
async function fetchBook(): Promise<Book> {
  const res = await fetch('/book');
  // when we get back response, we need to extract data out of it

  // assigning data to type unknown
  // we're doing this because we're reaching to this unknown API and we're not
  // 100% sure whether or not it will give me back a book object that has a title
  // that is a string
  // maybe its gonna give me back a number or null or undefined or an array
  const data: unknown = await res.json();

  // type guard, type narrowing
  if (
    data &&
    typeof data === 'object' &&
    'title' in data &&
    typeof data.title === 'string'
  ) {
    // now that data is truly a book
    return data as Book;
  }

  throw new Error('Expected to get a book, but didnt');
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
