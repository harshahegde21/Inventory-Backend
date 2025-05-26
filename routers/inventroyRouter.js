import express, { Router } from "express"
import { addItem,getItems,getOneItem,removeItem,updateItem } from "../controllers/inventoryController.js";
const router  = express.Router();


router.post("/items",addItem);
router.get("/items",getItems);
router.get("/test",(req,res)=>res.end("Server running "))
router.get("/items/:id",getOneItem);
router.patch("/items/:id",updateItem);
router.delete("/items/:id",removeItem);

export {router};
