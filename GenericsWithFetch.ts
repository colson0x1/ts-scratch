interface User {
  username: string;
}

interface Message {
  content: string;
}

interface Image {
  url: string;
}

// this function is going to return a Promise that's going to resolve to
// whatever type T is
async function fetchData<T>(path: string): Promise<T> {
  const res = await fetch(path);
  const json = await res.json();

  return json as T;
}

const run = async () => {
  const user = await fetchData<User>('/users');
  const message = await fetchData<Message>('/messages');
  const image = await fetchData<Image>('/images');
};
