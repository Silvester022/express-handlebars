
require('dotenv').config();
const hbs = require('hbs');
const express = require('express');

const app = express();
// const port = 8080;

// app.get('/hola-mundo', (req, res) => {
//     res.send('hola mundo desde una ruta relativa')
// })

// app.get('*', (req, res) => {
//     res.sendFile(__dirname + '/public/404.html')
// })

// app.listen(port, () => {
//     console.log(`app corriendo en el puerto: http://localhost/${port}`);
// });


// servir contenido estatico
app.use( express.static('public') );

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html')
// })

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html')
// })
// app.listen(8080);


// handlebars
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials')

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'fabian',
        titulo: 'curso de node'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'fabian',
        titulo: 'curso de node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'fabian',
        titulo: 'curso de node'
    })
})

app.listen(process.env.PORT);