const Model = require('../model/schema');


exports.regUser = async ( obj ) => {
    try{

        const data = await Model.user.create(obj);
        return data;

    }catch( error )
    {
        console.log("Error occured while CURD Operation - " , error );
        throw Error( error );
    }
}

exports.userExist = async ( emailid , phone ) => {
    try{

        console.log("Inside user exit" , emailid , phone );
        console.log("Checking for " , phone );

        let data = await Model.user.findOne( { "phoneNo" : phone   }) ;
        console.log(data);
        
        if ( data != null ){
            console.log("Phone number exist");
            return false ;
        }  
        else {
            console.log("Checking for " , emailid );  
            data = await Model.user.findOne( { "emailId" : emailid }) ;
            if( data != null ){
                console.log("EmailId exist");
                return false ;
            }
            else return true ;
        }

    }catch( error )
    {
        console.log( "Error ocured while CURD Operation - " , error );
        throw Error( error ) ;
    }

}

exports.login = async ( phno = null , email = null , password ) => {
    try{

        let data  ;
        if( phno != null )
        {
            data = await Model.user.findOne( { "phoneNo" : phno    , "passWord" : password }) ;
        }
        else 
        {
            console.log("Going for email login " , email , password );
            data = await Model.user.findOne( { "emailId" : email   , "passWord" : password }) ;
        }
        console.log("Retrived data " ,data);
        return data ;
        
    }catch( error ){
        console.log( "Error ocured while CURD Operation - " , error );
        throw Error( error ) ;
    }
}