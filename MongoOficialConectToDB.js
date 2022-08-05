import { MongoClient } from 'mongodb'
async function connect() {
	const uri = 'mongodb://localhost:27017'
	const client = new MongoClient(uri)


	try {
		await client.connect()
		//await deleteByName(client, 'PedroX')
		//await updateListingByName(client, 'xxxxxxxxxx' , {nombre:'PedroX'})
		await listarAll(client)
		//await listaPorNombre(client, 'Daniel')
	}
	catch (e) {
		console.log(e);
	}
	finally {
		client.close()
	}
}
async function deleteByName(client, name) {
	const result = await client.db('colegioDB').collection('estudiantes').deleteOne({ nombre: name })
	console.log(`${result.deletedCount}  documents were deleted `);
}

async function updateManyByAddingPadresDivorciados(client) {
	const result = await client.db('colegioDB').collection('estudiantes').updateMany({
		padres_divorciados: { $exists: false }
	}, { $set: { padres_divorciados: 'Unknown' } })
	console.log(`${result.matchedCount} documento (s) fueron encontrados`);
	console.log(`${result.modifiedCount} documentos fueron modificados`)
}


async function dblist(client) {
	const result = await client.db().admin().listDatabases()
	console.log(result);
}
async function listarAll(client) {
	const result = await client.db('colegioDB').collection('estudiantes').find({}).toArray()
	result.forEach(e => {
		console.log(e.nombre, e.apellido, e.edad);
	});
}
async function listaPorNombre(client, nombre) {
	const result = await client.db('colegioDB').collection('estudiantes').findOne({ nombre: nombre })
	if (result) {
		console.log(result)
	} else {
		console.log('no se presento coicidencia alguna, cavalliere')
	}
}

async function updateListingByName(client, nombreDelDocumento, nuevoDocumento) {
	const result = await client.db('colegioDB').collection('estudiantes').updateOne({ nombre: nombreDelDocumento }, { $set: nuevoDocumento })
	console.log(`${result.matchedCount} documents were found`);
	console.log(`${result.modifiedCount} documents were update`);

}
async function listarMayoresDeConNotaMayorQue(client, {
	edadMinima = 0,
	notaMinima = 0,
}) {
	const cursor = client.db('colegioDB').collection('estudiantes').find({
		edad: { $gt: edadMinima },
		nota: { $gte: notaMinima },
	})
	const result = await cursor.toArray()
	console.log(result);
}



connect().catch(console.error)