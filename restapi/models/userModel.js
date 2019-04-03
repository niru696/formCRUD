// const Joi = require('joi');

// const mongoose = require('mongoose');

// //const Joi = require('joi');

// const Schema = mongoose.Schema;

// let UserSchema = new Schema({

   
//     name: { type: String,  required: true ,  minlength: 5, maxlength: 50},
//     password: { type: String, required: true },
//     email: { type: String, unique: true, required: true, minlength: 5, maxlength: 255 },
 
// },

//  {
//     timestamps: true
// });

// function validateUser(user) {
//     const schema = {
//         username: Joi.string().min(5).max(50).required(),
//         email: Joi.string().min(5).max(255).required().email(),
//         password: Joi.string().min(5).max(255).required()
//     };
//     return Joi.validate(user, schema);
// }
//UserSchema.set('toJSON', { virtuals: true });
// Export the model
//module.exports = mongoose.model('User', UserSchema);


//module.exports.validate = validateUser;