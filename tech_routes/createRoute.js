import {Router  } from "express";
import { Tech } from "../db.js";

const router = Router()

const createTechRouter = router.post("/", (req,res)=>{
	if(req.body.image){
	const newTech = new Tech({imageLink: req.body.image})
	newTech.save().then((data)=>{
		res.status(200).json({success: true, message: data})
	}).catch((err)=>{res.json({success:false , message: err})})
	}else{
		res.status(404).json({success: false, message: "image was not provided"})
	}
})

export default createTechRouter;
