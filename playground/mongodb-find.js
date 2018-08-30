const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Uable to connect to MongoDB server');
  } 
  console.log('Connected to MongoDB Server');

// //find
// db.collection('Todos').find().toArray().then((docs) => {  
//     console.log('Todos')
//     console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('unable to fetch todos', err)
//   });

// //count
// db.collection('Todos').find().count().then((count) => {  
//     console.log(`Todos Count: ${count}`)
    
// }, (err) => {
//   console.log('unable to fetch todos', err)
//   });

// //filter in find 
//   db.collection('Todos').find({text: 'sing'}).count().then((count) => {
//     console.log(`the are ${count} user can sing` )
//   }, (err) => {
//       console.log('there is no user can sing')
//   })
});