import express, { Router } from "express";
const app = express()
const practicando = express.Router()

practicando.use((req,res,next)=>{
    console.log('ahora entraste en practicando');
    next()
})
practicando.get('/',(req, res)=>{
    res.send('practicando routers')
})
export default practicando