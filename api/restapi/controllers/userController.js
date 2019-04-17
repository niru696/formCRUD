
// //const Employee = require('../models/userModel');

// exports.test = function (req, res) {
//     res.send('Greetings from the Test controller!');
// };

// exports.createUser =  (req, res) => {

//     const employee = new Employee(
//         {
//             username: req.body.username,
//             password: req.body.password,
//            // cpassword:  req.body.cpassword,
//             email: req.body.email,
//             //name: req.body.email
            
            
//         }
   
//     );

//     employee.save()
//       .then(data => {
//           res.send(data);
//       }).catch(err => {
//            res.status(500).send({
//                   message: err.message || "Some erroe occured creating employee"
//            });
       
//     });

// };

// exports.getUser = (req, res) => {
   
//     Employee.find()  
//      .then(data => {res.send(data);
//     }).catch(err => { res.status(500).send({
//      message: err.message || "Some error occur while retrieving data."
//     }); 
//        });
// };
 
// exports.createUser = ( async (req, res) => {
//     // First Validate The Request
//     // const { error } = validate(req.body);
//     // if (error) {
//     //     return res.status(400).send(error.details[0].message);
//     // }
 
//     // Check if this user already exisits
//     let user = await User.findOne({ email: req.body.email });
//     if (user) {
//         return res.status(400).send('That user already exisits!');
//     } else {
//         // Insert the new user if they do not exist yet
//         user = new User({
//             username: req.body.name,
//             email: req.body.email,
//             password: req.body.password
//         });
//         await user.save();
//         res.send(user);
//     }
// });
 


