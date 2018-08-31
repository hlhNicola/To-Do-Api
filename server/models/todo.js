const {mongoose} = require('../db/mongoose')

const Todo = mongoose.model('Todo', {
    text: {
      type: String,
      required: true,
      minlength: 1,
      trim: true // remove extra spaces at open || end
    },
    completed: {
      type: Boolean,
      default: false
    },
    completedAt: {
      type: Number,
      default: null
    }
  });
  
  // let newTodo = new Todo({
  //   text: ' Cook dinner  ',
  // });
  
  // newTodo.save().then((doc) => {
  //   console.log(JSON.stringify(doc, undefined, 2))
  // }, (err) => {
  //   console.log('Unable to save todo');
  // }); 
  
  
  // let SecondTodo = new Todo({
  //     text: 'Sleep',
  //     completed: false,
  //     completedAt: 8
  //   });
    
    // SecondTodo.save().then((doc) => {
    //   console.log(JSON.stringify(doc, undefined, 2))
    // }, (err) => {
    //   console.log('Unable to save todo', err);
    // }); 

    module.exports = {Todo};