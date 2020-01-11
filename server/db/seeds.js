use emissions;

db.dropDatabase()

db.emissionFactors.insertMany([
  {
  travel: {
      car: "0.6",
      train: "0.3",
      plane: "1.0"
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
    name: "Paul McManus",
    travelNumber: 12,
    dietNumber: 10,
    energyNumber: 8
  },
  {
    name: "Shrek Shrekington",
    travelDistance: 1,
    dietNumber: 20,
    energyNumber: 20
  }
])
  ;
