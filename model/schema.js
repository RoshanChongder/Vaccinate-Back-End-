const Mongoose = require('mongoose'); 

Mongoose.connect( "mongodb://localhost:27017/vaccinate" ).then(
    ()=>{
        try{

            console.log("Database Connected");
            const userSchema = new Mongoose.Schema(
                {
                    name : {
                        firstName : { type : String , required : true } ,
                        lastName : { type : String , required : true  } 
                    } , 
                    passWord : { type : String , required : true  } ,
                    gender : { type : String , required : true } ,
                    emailId : { type : String , required : true , unique : true } , 
                    phoneNo : { type : Number , required : true , unique : true } ,
                    dateOfBirth : { type : Date , required : true  } 
                } , 
                {
                    timestamp : {
                        createdAt : true ,
                        updatedAt : true ,
                    } ,
                }
            );

            exports.user = Mongoose.model( "users" , userSchema );

        }catch( error )
        {
            console.log("Error occured while creatig schema.");
        }
    } , ( error ) => {
        console.log("Failed to create schema - " , error );
    } 
);