import express from "express";
import cors from "cors";

import connection from "./database.js";

const app = express();
app.use(express.json());
app.use(cors());

app.post('/list', async (req,res)=>{
    try{
        
        await connection.query(`
        INSERT 
        INTO list (text) 
        VALUES ($1)
        `,[req.body.text])
        res.sendStatus(201)

    }
    catch (e){
        console.log(e)
        res.sendStatus(500)
    }
})

export default app;
