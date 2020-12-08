const exp = require('express')
const hbs = require('hbs')
const app = exp()
const port = 3333 || process.env.PORT
const host = '0.0.0.0';
app.get('/',(req,res)=>{
    res.send('hello')
})
app.listen(port,host,()=>{
    console.log(`server started at http://localhost:${port}`)
})