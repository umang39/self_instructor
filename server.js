const exp = require('express')
const hbs = require('hbs')
const app = exp()
const port = process.env.PORT   || 3000
const host = '0.0.0.0';
app.use('/',exp.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/partails')
app.set('view engine','hbs')
app.set('views','views')
app.use(exp.json())
app.use(exp.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.render('index')
})
app.listen(port,host,()=>{
    console.log(`server started at http://localhost:${port}`)
})