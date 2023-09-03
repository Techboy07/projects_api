import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()


const projectSchema = new mongoose.Schema({
	projectName: String,
	projectDescription: String,
	projectImage: String,
	sourceCode: String,
	live: String,
})

const techSchema = new mongoose.Schema({
	imageLink: String
})



export const uri = process.env.MONGO_URI

export const connectMonngo = async()=>{
const  conn =	 await mongoose.connect(uri)
//	const projec = conn.useDb("projec")
return conn
}


export  const Project = mongoose.model("Project", projectSchema)
export  const Tech = mongoose.model("Techs", techSchema)
