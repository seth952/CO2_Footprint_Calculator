use emissions;

db.dropDatabase()

db.emissions.insertOne(

  {
    car: "0.6",
    train: "0.3",
    plane: "1.0",
    meat: "0.5",
    veg: "0.2",
    electricity: "0.99",
    gas: "0.33",
    hybrid: "0.66"

  }

);
