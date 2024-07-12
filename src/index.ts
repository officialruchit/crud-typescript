import express from "express"
import dotenv from"dotenv"
import bodyParser from "body-parser";
import userrouter from './routes/userRoute'
import db from './config/db'
db()

const PORT=process.env.PORT||3333
dotenv.config();
const app=express();
app.use(bodyParser.json())
app.use('/users',userrouter)


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})