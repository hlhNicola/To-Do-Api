const {ObjectID} = require('mongodb')
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo')
const {User} = require('../server/models/user')

// let id = '5b89b15d1bd2f1eb7dd978a611'

// if(!ObjectID.isValid(id)){
//   console.log('ID not valid')
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// })

// Todo.findOne({
//     _id: id
//   }).then((todo) => {
//       console.log('Todo', todo);
//   })

//   Todo.findById(id).then((todo) => {
//       if(!todo){
//           return console.log('Id not found')
//       }
//       console.log('Todo by Id', todo);
//   }).catch((e) => {
//     console.log(e)
//   })

let id = '5b887475dd395c876381b338'
if(!ObjectID.isValid(id)){
    console.log('ID not Valid')
}
User.findById(id).then((user) => {
    if(!user){
      return console.log('User not found')
    }
    console.log(JSON.stringify(user, undefined, 2))
    }).catch((e) => {
      console.log(e)
    })

