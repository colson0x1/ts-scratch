interface Car {
  model: string;
  year: number;
}

function printCar(car: Car) {
  console.log(car);
}

// rollsroyce implements the Car interface
const rollsroyce = {
  model: 'Phantom',
  year: 2017,
};

// Type inference not working here
// Year should be a number
// Because year has the inappropriate type here, the bugatti doesn't
// implement the Car interface
// bugatti doesn't qualify as a car
const bugatti = {
  model: 'Chiron',
  year: '2016',
};

// correctly satifies all the requirements of the Car interface
printCar(rollsroyce);
// here TS caught the error on bugatti
// but we got the error when we use it after some time
// it didnt gave error earlier
printCar(bugatti);

// If we apply Type Annotations  to them, we get better error message
// or "error message in more appropriate location"
// When we use Interface, We tell TypeScript specifically that we're trying
// to make a car object
//
// Using Type Annotations on bugatti, we get error on year now instead of when
// calling it at the end
