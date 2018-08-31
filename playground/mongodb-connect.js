// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//mongo drive 
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Uable to connect to MongoDB server');
  } 
  console.log('Connected to MongoDB Server');



//   db.collection('Todos').insertOne({
//     text: 'Something to do',
//     completed: false
//   }, (err, result) => {
//     if (err) {
//       return console.log('Unable to insert todo', err);
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2))
//   });
//   db.close();


//   db.collection('User').insertOne({
//     name: 'Fancy',
//     age: 18,
//     location: 'Chicago'
//   }, (err, result) => {
//     if(err) {
//         return console.log('unable to insert user', err);
//     }
//     console.log(JSON.stringify(result.ops))
//   })
//   db.close();

});

