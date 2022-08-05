import express from 'express'

const entendiendo = express.Router ()

const i = 0
entendiendo.use((req, res, next)=>{
    
    if (i===1) {
        next(new Error('todo mal vieja!')) 
    }else next()
    
})

entendiendo.use((req, res, next)=>{
    console.log('entraste en el endpoint de entendiendo 3');
    next()
})


entendiendo.use((req, res, next)=>{
    console.log('entraste en el endpoint de entendiendo 2');
    next()
})

// function miMiddleware (req, res, next) {
//     console.log('entraste en el endpoint de pronto 1');
//     next()
// }

entendiendo.get('/',(req, res)=>{
    res.send('tratando de entender routers')
})

export default entendiendo