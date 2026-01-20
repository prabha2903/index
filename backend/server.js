const express = require('express')
const app = express()
app.get('/api',(req,res)=>{
    res.send('Hi from expres')
})
app.listen(4000,()=>{
    console.log("server running on 4000")
});