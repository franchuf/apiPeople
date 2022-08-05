class ContenedorMem {
    constructor(){
        this.elementos = []
    }
    completarArray(num) {
        for (let index = 0; index < num; index++) {
            this.elementos.push (index);
        }
    }   
    listarAll(){
        return [...this.elementos]
    }
    listarId(id){
        const elem = this.elementos.find(element=>element===id)
        if(!elem){
            throw new Error ('error al listar elemento no encontrado')
        }else{
            return `su numero ${elem} ha sido encontrado`
        }
    }
    guardar(newElem){
        this.elementos.push(newElem)
        return newElem
    }
    actualizar(id,newVal){
        let index = this.elementos.findIndex(p=>p===id)
        if (!index){
            throw new Error ('error, numero no encontrado')
        }else {
            this.elementos[index] = newVal
            return index
        }
    }
    }

export default ContenedorMem