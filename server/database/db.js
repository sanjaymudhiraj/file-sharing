
import mongoose from "mongoose";

const DBConnection= async ()=>{
    const MONGODB_URL=`mongodb+srv://sanjay:sanjay@filesharing.3ihqy.mongodb.net/?retryWrites=true&w=majority&appName=filesharing`;
    try{
         await mongoose.connect(MONGODB_URL,{useNewUrlParser:true});
        console.log('databaseconnect successfully');

    }catch(error){
        console.error('Error while connecting with database',error.message);
    }
}

export default DBConnection;