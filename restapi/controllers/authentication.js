var passport = require('passport');
var mongoose = require('mongoose');
//var User = mongoose.model('Users');
const User = require('../models/users');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.register = function (req, res) {

  // if(!req.body.name || !req.body.email || !req.body.password) {
  //   sendJSONresponse(res, 400, {
  //     "message": "All fields required"
  //   });
  //   return;
  // }

  var user = new User(req.body);

  // user.name = req.body.name;
  // user.email = req.body.email;
  // user.exp =req.body.exp;
   console.log(user.name + " "+ user.email);

  user.setPassword(req.body.password);

  user.save((err) =>{
    var token;
    token = user.generateJwt();
    res.status(200);
    res.json({
      "token" : token
    });
  });
//   user.save()
//   .then(data => {
//       res.send(data);
//   }).catch(err => {
//        res.status(500).send({
//               message: err.message || "Some erroe occured creating employee"
//        });
   
// });

};

module.exports.login = function(req, res) {

  // if(!req.body.email || !req.body.password) {
  //   sendJSONresponse(res, 400, {
  //     "message": "All fields required"
  //   });
  //   return;
  // }

  passport.authenticate('local', function(err, user, info){
    var token;

    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);

};
