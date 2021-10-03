const helper = require('../utilities/helper');

exports.addUser = async ( req , res  ) => {

    try{

        console.log("reached Add user");
        let userData = {
            name : {
                firstName : req.body.name.firstName , 
                lastName  : req.body.name.lastName  , 
            } , 
            passWord    : req.body.passWord , 
            gender      : req.body.gender.toUpperCase()   , 
            emailId     : req.body.emailId  , 
            phoneNo     : req.body.phoneNo  ,
            dateOfBirth : req.body.dateOfBirth  
        }
        console.log( userData );

        // No validations are done as all the validations will be done at frontend 
        //inserting the data 

        if( ! await helper.userExist( userData.emailId , userData.phoneNo ) )
        {
            console.log("User already exist");
            res.status(409).json({
                status : false ,
                message : "Email Id or Phone already registered."
            });
        }else{
            console.log("Inserting the user");
            let data = await helper.regUser( userData ) ;
            console.log("Data inserted - " , data );

            res.status(201).json({
                //status : true ,
                message : "User registered successfully with id : " + data.emailId
            });

        }

    }catch( error  )
    {
        console.log("Error occured while registering a user " , error) ;
        res.status(400).json({
            message : "Error occured - " + error.message
        });
    }

}

exports.logIn = async ( req , res ) => {
    
    try{

        let passWord = req.body.passWord ; 
        let emailId  = req.body.emailId  ;
        let phoneNo  = req.body.phoneNo  ;

        console.log( emailId , phoneNo , passWord );
        //console.log(phoneNo === undefined );
        let data = await helper.login( phoneNo , emailId , passWord );
        console.log( "Login returned " , data );
        if( data == null )
        {
            res.status(400).json({
                status : false ,
                message : "Wrong Credentials"
            });
        }else {
            res.status(200).json({
                status : true ,
                message : "successful login"
            });
        }
        
    }catch( error ){
        console.log("Error occured in logIn controller");
        res.status(400).json({
            message : "Please try after some time"
        });
    }
}