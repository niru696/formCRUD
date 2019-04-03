


const Employee = require('../models/formModel');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};


exports.create =  (req, res) => {

    const employee = new Employee(
        {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            work:  req.body.work,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip
        }
   
    );

    employee.save()
      .then(data => {
          res.send(data);
      }).catch(err => {
           res.status(500).send({
                  message: err.message || "Some erroe occured creating employee"
           });
       
    });

};
 
exports.display = (req, res) => {
   
    //  Employee.find()  
    //   .then(data => {res.send(data);
    //  }).catch(err => { res.status(500).send({
    //   message: err.message || "Some error occur while retrieving data."
    //  }); 
    //     });
    
    var pageNo = parseInt(req.query.pageNo)
    var size = parseInt(req.query.size)
    console.log(size);
    var query = {}
    
    if(pageNo < 0 || pageNo === 0) {
          response = {"error" : true,"message" : "invalid page number, should start with 1"};
          return res.json(response)
    }
    query.skip = size * (pageNo - 1)
    query.limit = size
    // Find some documents
               Employee.count({},function(err,totalCount) {
               if(err) {
                 response = {"error" : true,"message" : "Error fetching data"}
               }
               Employee.find({},{},query,function(err,data) {
                // Mongo command to fetch all data from collection.
              if(err) {
                  response = {"error" : true,"message" : "Error fetching data"};
              } else {
                  var totalPages = Math.ceil(totalCount / size)
                  response = {"error" : false,"message" : data,"pages": totalPages};
              }
              res.json(response);
           });
         })


 };

 exports.findDetails = (req, res) => {
   
    
    // var filter = parseInt(req.query.filter || '')
    // var sortOrder = parseInt(req.query.sortOrder)
    var pageNo = parseInt(req.query.pageNo)
    var size = parseInt(req.query.size)
    console.log(size);
    var query = {}
    // if (filter) {
    //     Employee = Employee.filter(lesson => lesson.description.trim().toLowerCase().search(filter.toLowerCase()) >= 0);
    //  }

    //  if (sortOrder == "desc") {
    //     Employee = Employee.reverse();
    // }
 
    if(pageNo < 0 || pageNo === 0) {
          response = {"error" : true,"message" : "invalid page number, should start with 1"};
          return res.json(response)
    }
    query.skip = size * (pageNo - 1)
    query.limit = size
    // Find some documents
               Employee.count({},function(err,totalCount) {
               if(err) {
                 response = {"error" : true,"message" : "Error fetching data"}
               }
               Employee.find({},{},query,function(err,data) {
                // Mongo command to fetch all data from collection.
              if(err) {
                  response = {"error" : true,"message" : "Error fetching data"};
              } else {
                  var totalPages = Math.ceil(totalCount / size)
                  response = {"error" : false,"message" : data,"pages": totalPages};
              }
              res.json(response);
           });
         })


 };


exports.findOne = (req, res) => {
    Employee.findById(req.params._Id)
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "Note not found with id " + req.params._Id
            });            
        }
        res.send(data);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params._Id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params._Id
        });
    });
};


 exports.update = (req, res) => {

     Employee.findByIdAndUpdate(req.params._Id, {

            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            work:  req.body.work,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip
     

    }, {new: true})
      .then(data => {
      if(!data){
                return res.status(404).send({
                       message: "Data not found with id" + req.params._Id
            });
        }
          res.send(data);
    }).catch(err => {
         if(err.kind  === 'ObjectId'){
           return res.status(404).send({
                message: " Data not found with id " + req.params._Id
      });
     }
      return res.status(500).send({
                message: "Error updating data with id" +req.params._Id
       });
      });
    };



exports.delete = (req, res) => {
    Employee.findByIdAndRemove(req.params._Id)
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "Data not found with id " + req.params._Id
            });
        }
        res.send({message: "Data deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Data not found with id " + req.params._Id
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params._Id
        });
    });
};

