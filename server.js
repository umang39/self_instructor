const exp = require('express')
const hbs = require('hbs')
const app = exp()
const port = 3333 || process.env.PORT
app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`)
})