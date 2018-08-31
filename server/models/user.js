const {mongoose} = require('../db/mongoose')
const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        default: null 
    }
});

// let user = new User({
//     email: 'hali@qq.com'
// })

// user.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2))  
// }, (err) => {
//   console.log('Unable to save this user', err)
// })

module.exports= {User}