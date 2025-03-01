import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DBConnection from './database/db.js';



const app=express();
app.use(cors());
app.use('/',router);
const port=8080;

DBConnection();

app.listen(port,()=>{
    console.log(`https://localhost:${port}`);
})


