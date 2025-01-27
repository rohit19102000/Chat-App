import mongoose from "mongoose"

export const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MONOGODB cinnected : ${conn.connection.host}`);

    }catch(err){
        console.log(`MONGODB connection error: ${err}`)
    }
}