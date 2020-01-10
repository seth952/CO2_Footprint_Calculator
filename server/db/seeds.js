use emissions;

db.dropDatabase()

db.emissions.insertMany([
  {
  travel: {
      car: "0.6",
      train: "0.3",
      plane: "1.0"
    },
  diet: {
      meat: "0.5",
      veg: "0.2"
    },
  energy:{
      electricity: "0.99",
      gas: "0.33",
      hybrid: "0.66"
    }

  },
  {
    name: "john",
    distance: 1
  },
  {
    name: "shrek",
    distance: 1
  }
])
  ;
