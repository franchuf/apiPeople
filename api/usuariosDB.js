import ContenedorDB from "../src/contenedorDB.js";
import { generarUsuario } from "../utils/generadorDeUsuarios.js";
import { generarId } from "../utils/generadorDeIds.js";

class ApiUsuariosMockDB extends ContenedorDB {
    constructor(cliente) {
        super(cliente, 'usuarios');
    }

    async popular(cant = 50) {
        const nuevos = [];
        for (let i = 0; i < cant; i++) {
            const nuevoUsuario = generarUsuario(generarId());
            const guardado = await this.guardar(nuevoUsuario);
            nuevos.push(guardado);
        }
        return nuevos;
    }
}

export default ApiUsuariosMockDB;
