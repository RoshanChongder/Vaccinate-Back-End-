const bodyParser = require('body-parser');
const cors = require('cors') ;                // for handling api request from front end 
const routes = require('./routes/routes');
const Express = require('express');           // importing express 
const App = Express();                        // creating express instance 
const port = 3000 || process.env.port ;       // port to run server 



// to handle cors error - faced on call from front end 
App.use(cors());                       
App.use(bodyParser.json());
App.use(routes);










App.listen(port , ()=>{
  console.log("Server started listening to port number " , port );
})