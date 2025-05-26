import express, { urlencoded } from "express"
import mongoose from "mongoose";
import { router } from "./routers/inventroyRouter.js";
import { makeConnection } from "./connection.js";
const port = 3000;

const app = express();
app.use(urlencoded({extended:true}));
app.listen(port,()=>{
    console.log("Server is running on port ",port); 
})

makeConnection(`mongodb://localhost:27017/New-Backend`).then(()=>console.log("Database Connected Successfully")
).catch((error)=>console.log("DB NOT CONNECTED\n",error)
);

app.use("/inventory",router);