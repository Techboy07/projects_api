import {Router } from "express"
import {Project} from "../db.js"

const router = Router()
const createRouter =  router.post("/",(req, res)=>{
	const {projName , projDescription,image ,livePage, source } = req.body 
	console.log(req.body);

if(projName && projDescription && image){

		const singleProject = new Project({
					projectName: projName,
					projectDescription: projDescription,
					projectImage: image,
					sourceCode: source? source: "",
			live: livePage? livePage : ""} 
				)

			singleProject.save()
				.then(data => res.json(data))
				.catch(err => res.json(err))

		}else{
			res.send("complete your query")
				}

})

export default createRouter;
