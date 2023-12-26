
const http = require('node:http');

http.createServer((req, res) => {

    // console.log(req);
    // console.log(req.url);

    // res.writeHead(200);
    // res.write('hola mundo');
    // res.end();
    

    // const persona = {
    //     id: 1,
    //     name: 'juan'
    // }

    // res.writeHead(200, {'Content-Type': 'application/json'});
    // res.write( JSON.stringify(persona));
    // res.end();
    
    
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead(200, {'Content-Type': 'application/csv'});
    // res.write( 'id, nombre\n ');
    // res.write( '1, juan\n ');
    // res.write( '2, maria\n ');
    // res.write( '3, ana\n ');
    // res.end();
    
    
    res.write('HOLA MUNDO');
    res.end();

})
    .listen(8080)

console.log('Escuchando el puerto', 8080);