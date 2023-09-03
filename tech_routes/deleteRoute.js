import { Router } from "express";
import { Tech } from "../db.js";

const router = Router()

const deleteTechRouter = router.delete("/",(req,res)=>{
const {techId} = req.body

	if(techId){
		Tech.deleteOne({_id : techId})
			.then(data => res.status(200).json({success:true, message: data}))
			.catch(err => res.status(400).json({success: false, message : err}))
	}else{
		res.status(404).json({success: false, message: "techId not supplied"})
	}

})

export default deleteTechRouter;
