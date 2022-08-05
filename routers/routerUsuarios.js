import express, { Router } from 'express'
import user from '../api/index.js'
import bodyParser from 'body-parser'


const usuarios = express.Router()

usuarios.use(bodyParser.urlencoded({ extended: true }))
usuarios.use(express.json())


usuarios.post('/popular', async (req, res) => {
    res.json(await user.popular(req.query.cant))
})

usuarios.post('/popular/update/:id', async (req, res) => {
    res.json(await user.updateById(req.params.id, req.body))
})

usuarios.get('/popular/listar', async (req, res) => {
    res.json(await user.listarAll())
})

usuarios.get('/popular/buscar/:id', async (req, res) => {
    //console.log(req.params.id);
    const elem = await user.listarId(req.params.id)
    res.json(elem)
})

usuarios.post('/popular/borrar/:id', async (req, res) => {
    const result = await user.deleteByid(req.params.id)
    res.json(result)
})

usuarios.put('/popular/actualizar/:id', (req, res) => {
    res.json(user.actualizar(Number(req.params.id), Number(req.body.newVal)))
})

export default usuarios