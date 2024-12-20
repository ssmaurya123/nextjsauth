import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection=mongoose.connection

        connection.on('connected',()=>{
            console.log("MongoDB Connected");
            
        })

        connection.on('error',(err)=>{
            console.log("MongoDb Connection Error"+err);
            process.exit()
        })
    } catch (error) {
        console.log('Somethig wrong in connecting DB');
        console.log(error);
        
    }
}