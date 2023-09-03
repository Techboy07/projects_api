import { Tech } from "../db.js";
import { Router } from "express";

 const router = Router()

const getRouter = router.get("/", (req,res)=>{
Tech.find()
		.then(data => res.json(data))
		.catch(err => res.json(err))
})

export default getRouter
