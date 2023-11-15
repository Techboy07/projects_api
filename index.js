import express from "express";
import bodyParser from "body-parser";
import { Project , connectMonngo } from "./db.js"
import createRouter from "./routes/createRoute.js"
import deleteRouter from "./routes/deleteRoute.js"
import updateRouter from "./routes/updateRoute.js"
import getRouter from "./tech_routes/getRoute.js";
import createTechRouter from "./tech_routes/createRoute.js"
import deleteTechRouter  from "./tech_routes/deleteRoute.js";
import cors from "cors"
connectMonngo()
	.then(() => console.log("connected succefuly"))
	.catch(err => console.log(err))

/*const singleProject = new Project({
	projectName: "name",
	projectDescription: "description",
	sourceCode: "no sourceCode",
	live: "not live yet",
	projectImage: "no image"
})
*/

const app = express()

app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.use(cors())
//routes

app.get("/", (req,res)=>{
	res.json({message: `welcome ${req.url} use any of the routes below`,
		projects: "/projects",
		techs: "/techs"
	})
})

app.get("/projects",(req,res)=>{

	Project.find()
		.then(data => res.json(data))
})

// createRoute -- post request

app.use("/projects", createRouter)

// deleteRouter --delete request

app.use("/projects", deleteRouter)

// updateRouter -- put request

app.use("/projects", updateRouter)

        //Technologies
	
app.use("/techs", getRouter)

// create techs post request

app.use("/techs", createTechRouter)

//deleteTechRouter

app.use("/techs", deleteTechRouter)

app.listen(3000,()=>{
console.log("server started at port 3000")
})
