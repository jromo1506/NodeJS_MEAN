const mongoose = require('mongoose');
require('dotenv').config({path:'variables.env'});


const conectarDB = async () => {
    try{

        await mongoose.connect(process.env.DB_MONGO, {
            //Estas opciones antes se usaban, en mongoose 6 ya no es necesario ponerlas si no da error
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
            //useFindAndModify:false
        })
        console.log('BD Conectada');

    } catch(error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = conectarDB