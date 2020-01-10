const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const bodyParser = require('body-parser');
const createRouter = require('./helpers/create_router.js');

app.use(cors());
app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('emissions');
  const emissionsCollection = db.collection('emissions');
  const emissionsRouter = createRouter(emissionsCollection);
  app.use('/api/emissions', emissionsRouter);
})
.catch(console.err)

app.listen(3000, function(){
  console.log("App running on port 3000");
})
