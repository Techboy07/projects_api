import {Router} from "express"
import {Project} from "../db.js"

const router = Router()

  const deleteRouter = router.delete("/" ,(req,res)=>{
	const { projId } = req.body


	if(projId){
		Project
			.deleteOne({_id: projId})
			.then((data)=>{
				res.status(200).json({sucess:true, message: data })
			})
			.catch((err)=>{
				res.status(400).json({sucess: false,message: err })
			})
	}else {
		res.status(404).json({sucess: false, message: "input the id"})
	}
})

export default deleteRouter;
