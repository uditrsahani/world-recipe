import mongoose from "mongoose";
import express from 'express'
import connectDB from "./db.js";
import routes from './routes/routes.js';
import cors from 'cors'

const app = new express();

//middleware
app.use(express.json())
app.use(cors())

//database connection
connectDB();

//routes
app.use('/api', routes);

app.listen(5000, ()=>{
  console.log('Server is running on port: 5000');
})