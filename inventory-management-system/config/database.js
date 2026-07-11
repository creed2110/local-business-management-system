import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.conncet(process.env.MONGO);
        console.log('mongodb connection is successful')
    } catch (error){
       console.log('mongodb connection was a failure');
       console.log(error.message);
       process.exit(1)
    }
}
export default connectDB;