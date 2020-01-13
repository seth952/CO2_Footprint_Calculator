use emissions;

db.dropDatabase()

db.emissionFactors.insertMany([
  {
  travel: {
      car: "473",
      train: "34.80",
      plane: "26900"
    },
  energy:{
      electricity: "0.99",
      gas: "0.33",
      hybrid: "0.66"
    },
  diet: {
      meat: "0.5",
      veg: "0.2"
    }
  }
])

db.userData.insertMany([

  {
    name: "Shrek Shrekington",
    car: "1",
    train: "2",
    plane: "3",
    electricity: "4",
    gas: "5",
    hybrid: "6",
    meat: "7",
    veg: "8"
},
  {
    name: "Donkey Murphy",
    car: "9",
    train: "8",
    plane: "7",
    electricity: "6",
    gas: "5",
    hybrid: "4",
    meat: "3",
    veg: "2"
  }
]);
