import {Router} from "express"
import {Project} from "../db.js"

const router = Router()

const updateRouter = router.put("/",(req,res)=>{
	const {projId,projName,projDescription,image,source,livePage}= req.body

	const filterObject = {
		projectName : projName,
		projectDescription: projDescription,
		projectImage: image,
		sourceCode : source,
		live: livePage
	}

	let newObject = {}

	for(let field in filterObject){

		if(filterObject[field]){	
			newObject[field] = filterObject[field]
		}

	}

	if(projId && newObject !== {}){
		Project.updateOne({_id :  projId}, {
			...newObject
		})
			.then(data => res.status(200).json({success: true, message: data }))
			.catch(err => res.status(400).json({success:false, message: err }))
	}else{
		res.status(404).json({success:false , message: "there is nothing to update!!!"})
	}
})

export default updateRouter
