require("dotenv").config()
const express=require("express");
const app=express();
const port=process.env.PORT;


app.get('/',(req,res)=>
{
    res.send('Hello World!');
})

app.get('/twitter',(req,res)=>
{
    res.send('hitesh.com');
})

app.get('/login',(req,res)=>
{
  res.send('<h1>please login at chai aur code</h1>')
})

app.listen(port,()=>
{
    console.log(`Example app listening on port ${port}`);
})
//console.log("chai aur code");