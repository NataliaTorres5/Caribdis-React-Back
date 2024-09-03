const mongoose = require ('mongoose');

/*
mongoose.connect(

//primer parametro link de conexion que se accede desde la variable de entorno MONGO_CONNECT esta establecido en .env como se elige
process.env.MONGO_CONNECT,
{
    //segundo parametro: objeto con dos propiedades en true 
    useUnifiedTopology: true,  //habilita que mongoose maneje la base de datos MongoDB
     useNewUrlParser: true , //  usa el analizador de errores de mongoose y no el de mongoDB

} 
) 
.then(()=>console.log('Connected to database successfully')) //luego de que se cumpla la promesa se avisa al desarrollador se avisa a la consola que se conecto
.catch(error=>console.log(error)) //si no se pudo conectar atrapa el error

//una vez configurada la conexion: se requiere la configuración en app.js

*/

//despues de la actualizacion de mongoose encima de la version 4. no se necesita usar  unified topology ni useurlparser en true,porque automaticamente los tiene integrados


/*
module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECT, {});
        console.log("CONNECTED TO DATABASE SUCCESSFULLY YEY");
    } catch (error) {
        console.error('COULD NOT CONNECT TO DATABASE:', error.message);
    }
};

*/

mongoose.connect(

    //primer parametro link de conexion que se accede desde la variable de entorno MONGO_CONNECT esta establecido en .env como se elige
    process.env.MONGO_CONNECT
    ) 
    .then(()=>console.log('Connected to database successfully yey')) //luego de que se cumpla la promesa se avisa al desarrollador se avisa a la consola que se conecto
    .catch(error=>console.log(error)) //si no se pudo conectar atrapa el error
    