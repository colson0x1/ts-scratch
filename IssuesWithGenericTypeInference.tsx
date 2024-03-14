// Generics and Type Inference around them, is used super heavily inside
// of React codebase and many other common libraries around React as well
// When we start to use Type inference with React, there's couple of common
// issues that we're going to run with

// useState is a generic function
// the type defination of this function doesn't really know if we're trying to
// store a number, or a string, or a boolean or ...
// so the authors of React has to define useState as a generic function
import { useState } from 'react';

function ColorPicker() {
  // we're relying upon genric type inference to figure what the type of our
  // piece of state is i.e type of colors
  // but the problem is, we've not given TS enough information to figure out
  // what the elements inside of this array are going to be
  // colors is: const colors: never[]
  // it means TS just has not gotten enough information to infer what elements
  // are gonna be inside of that array
  // so to fix this error, we have to add in generic type here.
  // we cannot rely upon generic type inference
  // const [colors, setColors] = useState([]);

  const [colors, setColors] = useState<string[]>([]);

  const handleClick = () => {
    setColors([...colors, 'red']);
  };

  return <button onClick={handleClick}>Click</button>;
}

// takeaway
// vast marjority of the time, we can rely upon genric type inference and
// everything is gonna work probably pretty okay but there are a couple of
// corner cases where things are not gonna quite work as we expect
// The most common case if we have a piece of state that starts off with an
// empty array, We must add in the generic type otherwise we're not giving
// TS enough information to figure out what is supposed to be inside of that
// array
