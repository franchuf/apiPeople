import ContenedorFS from "../src/contenedorFS.js";
import { generarUsuario } from "../utils/generadorDeUsuarios.js";
import { generarId } from "../utils/generadorDeIds.js";

class ApiUsuariosMockFs extends ContenedorFS {
    constructor() {
        super("./usuarios.json");
    }

    popular(cant = 50) {
        const nuevos = [];
        for (let i = 0; i < cant; i++) {
            const nuevoUsuario = generarUsuario(generarId());
            const guardado =  this.guardar(nuevoUsuario);
            nuevos.push(guardado);
        }
        return nuevos;
    }
}

export default ApiUsuariosMockFs;
