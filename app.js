//definir variables
const express = require('express'); //http
const hbs = require('hbs') //html - dinamicos
const bodyParser = require('body-parser') //procesar solicitudes post
const port = process.env.port || 3000; //puerto

const app = express()

//Motor de vistas - html dinamico
app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/view/partials',()=>{})

//Middleware - use
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post('/dashboard',(req,res)=>{
    //res.send('aqui va el dah') //texto
    //res.sendFile('dashboard.html') // archivo HTML
    res.render('dashboard', {
        nombre: "Jesus Miguel",
        email: "jesmiguelhdzg@gmail.com"
    }) //vista dinamica - HTML Dinamico
})

//definir las rutas para el cliente
app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('*',(req,res)=>{
    res.render('404')
})
//espta pare es para el desarrollador
app.listen(port,()=>{
    console.log('El servidor esta correndo en el puerto: ', port)
})