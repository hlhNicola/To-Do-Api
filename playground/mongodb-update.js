const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Uable to connect to MongoDB server');
  } 
  console.log('Connected to MongoDB Server');


//findOneAndUpdate
db.collection('Todos').findOneAndUpdate(
  {
    _id: new ObjectID('5b884637c317fe571fc790fe')
  }, {
    $set: {
      completed: true
    }
  }, {
      returnOriginal: false
    }).then((result) => {
  console.log(result);
})

db.collection('User').findOneAndUpdate(
  {
    _id: new ObjectID('5b88218c99fb1b54828cd1a0')
  }, {
    $set: {
      name: 'hong'
    },
    $inc: {
      age: -2
    }
  }, {
      returnOriginal: false
    }).then((result) => {
  console.log(result);
})




});