import express from 'express';
import entendiendo from './routers/routerEntendiendo.js'
import practicando from './routers/routerPracticando.js'
import usuarios from './routers/routerUsuarios.js'
const app = express();
console.clear()
app.use('/entendiendo', entendiendo)
app.use('/practicando', practicando)

app.use('/api/usuarios', usuarios)


const PORT = 8089
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))