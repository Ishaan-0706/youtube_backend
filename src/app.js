import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true 
}))
app.use(express.json({limit: "16kb"})) // express.json() is a middleware  which gets a json from request then turns it into js object
app.use(express.urlencoded({extended : true , limit:true})) // decodes the data sent and gives to req.body
app.use(express.static("public"))
app.use(cookieParser())//Middleware that reads cookies from incoming requests and makes them available as req.cookies
export {app}