import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express();
console.log(process.env.PORT);


app.get('/',(req,res)=>{
    res.send("<h1>Webhook Successfully received.</h1>");
})
app.post("/webhook",(req,res)=>{
    console.log("Webhook received :",req.body);
    res.status(200).send("Webhook Succesfully received");
})

app.listen(process.env.PORT,()=>{
    console.log(`Your server is live on http://localhost:${process.env.PORT}`);
})



