import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';
import { demoRouter } from './app/routes';




dotenv.config();

export const app =express()


app.use(cors());


//middlewares
app.use(express.urlencoded({ extended: true }));

app.use(express.json());



// Routes 

app.use('/api', demoRouter);