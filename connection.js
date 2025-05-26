import mongoose from "mongoose";

const makeConnection =async (url)=>{
    await mongoose.connect(url);
}
export {makeConnection}