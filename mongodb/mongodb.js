import mongoose from "mongoose";
const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("db connected");
    }catch(err){
        console.log(err);
    }
}
export default connect;