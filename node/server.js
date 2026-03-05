import express from 'express'
const app = express()

app.use(express.json())

app.get('/', (req,res)=>{
    res.status(200).json({message: "Hello from Mocha!"})
})

app.get('/add',(req,res)=>{
    const {num1,num2}= req.query;
    const sum = Number(num1)+ Number(num2)
    res.json({result: sum})
})

app.get('/name',(req,res)=>{
    res.status(200).json({
        message:"my name is sumaya"
    })
})

export default app

