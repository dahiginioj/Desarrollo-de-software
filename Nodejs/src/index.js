const express = require('express');

class Server {
    constructor() {
        //Crear aplicación express
        this.app = express();
        //Indicar/setear el puerto por el que correrá el servidor
        this.app.set('PORT', process.env.PORT || 3000); // process.env.PORT indica que correrá por el puerto que este habilitado por el servidor
        //Indicar que se procesara datos de las solicitudes en formato json
        this.app.use(express.json());

        //Crear un objeto router
        let router = express.Router();
        router.get('/', (req, res) => { //req enviar datos del cliente al servidor, res respuesta del servidor al cliente
            res.status(200).json({ message: "All ok" }); //send();
        });
        //Añadir ruta a la app express
        this.app.use(router);
        //Levantar servidor / poner el servidor a la escucha
        this.app.listen(this.app.get('PORT'), () => {
            console.log("Servidor corriendo por el puerto =>", this.app.get('PORT'));
        });
    }
}

new Server();