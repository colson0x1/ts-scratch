interface Car {
  year: number;
  make: string;
  model: string;
}

function formatCar(car: Car) {
  // car.company
  return `Year: ${car.year}, model: ${car.model}, make: ${car.make}`;
}

formatCar({
  year: 2028,
  make: 'Porsche',
  model: '911',
});
