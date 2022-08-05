import { MongoClient } from 'mongodb'
import ApiUsuariosMockFs from "./usuariosFS.js";
import ApiUsuariosMockMem from "./usuariosMem.js";
import ApiUsuariosMockDB from "./usuariosDB.js";


const uri = 'mongodb://localhost:27017'

const option = 'mongo'
let user

switch (option) {
    case 'mem':
        user = new ApiUsuariosMockMem
        break;
    case 'file':
        user = new ApiUsuariosMockFs
    case 'mongo':
        const client = new MongoClient(uri)
        user = new ApiUsuariosMockDB(client)

}



export default user