const express = require('express')
const app = express()
const hbs = require('hbs')
const port = 8181

//servir contenido estatico
// Establecer el directorio donde se encuentran los 
// archivos html

app.use(express.static('public'));

hbs.registerPartials(__dirname+'/public/views/partials',function(err){});
app.set('view engine','hbs');
app.set('views',__dirname+'/public/views')

app.get('/',(req,res)=>{
    // res.send('Hola mundo')
    res.render('registrarVenta',{
        nombre: 'home'
    })
})

// app.get('/contacto',(req, res)=>{
//     res.send('')
// })

app.get('/registrarVenta',(req, res) => {
    res.sendFile(__dirname + '/public/views/registrarVenta.hbs')
})


app.get('*',(req, res)=>{
    //res.send('Pagina no encontrada')
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Escuchando por el puerto ${port}`);
})  

