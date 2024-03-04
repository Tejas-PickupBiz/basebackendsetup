import mongoose from "mongoose";

const connectDB=()=>{mongoose.connect(process.env.MONGO_URI||"",{
    dbName:process.env.DB_NAME,
})
    .then(()=>console.log("Database connected successfully"))
    .catch((err)=>console.log(err))
} 

export default connectDB; 