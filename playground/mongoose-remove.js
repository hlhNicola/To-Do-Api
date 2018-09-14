const {ObjectID} = require('mongodb')
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo')
const {User} = require('../server/models/user')

Todo.remove({}).then((result) => {
    console.log(result)
    })

// Todo.findOneAndRemove({}).then(() => {

// })

Todo.findByIdAndRemove('5b99c3674694461a4934928a').then((todo) => {
    console.log(todo)
})