# Proyecto consumo de fake api. Nombre: "popular"

<h1>Descripcion</h1>
<p>En esta aplicacion se ingresan tantos registros como se deseen (50 si es que no se especifica) en una persistencia (memoria, file system , o una base de mongo).</p>
<br>
<p>
En primera instancia se debe ingresar al index.js en la carpeta utils para determinar cual serà la persitencia. Luego se debe correr el servidior de la base de datos en el localhost. 
Hecho esto se hace con postman o thunderclient
post: api/usuario/popular para sumar registros.
get:  api/usuarios/popular/listar para listar todos los registros
get:  api/usuarios/popular/buscar/:id para encontrar un registro acorde a su id.
post: api/usuarios/popular/update/:id para actualilzar segun el id y acorde a los parametros que se le pasan (json)
</p>