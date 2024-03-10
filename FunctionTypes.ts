interface Car {
  model: string;
  year: number;
  setYear: (year: number) => void;
  setModel: (model: string) => void;
  getDescription: () => string;
}

const rollsroyce: Car = {
  model: 'Phantom',
  year: 2017,
  setYear(nextYear: number) {
    this.year = nextYear;
  },
  setModel(nextModel: string) {
    this.model = nextModel;
  },
  getDescription() {
    return `Year: ${this.year}, Model: ${this.model}`;
  },
};

// we get documentation on setModel()
// the arguments name for function on interface doesn't has to be same
// as in the object that's that has the actual implementation
// whatever name we put, we see in autocomplete
// i.e the purpose of year, model arguments name is just for documentation
// the documentation that pops up whenever we go to call that function
rollsroyce.setModel();

// We write functions annotations tons whenever we are trying to define
// Props, Interfaces
// Interfaces describes Props that contains Callback functions
// We do that all the time in React
// We're passing down functions into components all the time
