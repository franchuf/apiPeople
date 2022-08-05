class ContenedorDB {
  constructor(cliente) {
    this.cliente = cliente;
  }

  async guardar(nuevoRegistro) {
    const result = await this.cliente.db('coderhouse').collection('usuarios').insertOne(nuevoRegistro)
    return `nuevo registro creado con el siguiente id: ${result.insertedId}`
  }
  
  async updateById(id, nuevoDocumento) {
    const result = await this.cliente.db('coderhouse').collection('usuarios').updateOne({ id: id }, { $set: nuevoDocumento })
    return `${result.modifiedCount} documents were update, ${result.matchedCount} documents were found`;
  }

  async deleteByid(id) {
    const result = await this.cliente.db('coderhouse').collection('usuarios').deleteOne({ id })
    if (!result.deletedCount) {
      return `el registro ${id} no se encontro`
    } else {
      return `el registro ${id} ha sido eliminado`
    }
  }
  async listarAll() {
    const result = await this.cliente.db('coderhouse').collection('usuarios').find({}).toArray()
    return result;
  }
  async listarId(id) {
    const result = await this.cliente.db('coderhouse').collection('usuarios').findOne({ id })
    if (!result) {
      return `no se encontro el registro con el id ${id}`
    } else {
      return result
    }
  }
}
export default ContenedorDB;

