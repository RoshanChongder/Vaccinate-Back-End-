const userController = require('../controllers/userController');
const Express = require('express') ;                         // importing express 
const route = Express.Router() ;                             // Router instace 



route.post("/registration" , userController.addUser );
route.post("/login" , userController.logIn );



module.exports = route ;    