// populatedb.js

// necesitamos importar mongoose
const mongoose = require('mongoose');

// importar el modelo de usuario
const user = require('./models/user');

// la URI de la db
const db = 'mongodb+srv://hellodb:hellodb@cluster0.6btkp.mongodb.net/hellodb?retryWrites=true&w=majority';

// array de usuarios para ingresar a la db
const users = [
  {
    id: 1,
    name: 'Winterish',
    fcolor: 'red',
    weight: '80.1456',
    fshow: 'One Piece'
    
  },
  {
    id: 2,
    name: 'Rizzi',
    fcolor: 'Blue',
    weight: '73.1252',
    fshow: 'My little Pony'
  },
  {
    id: 3,
    name: 'Roman',
    fcolor: 'black',
    weight: '110.862',
    fshow: 'Fast and Furious (animated version)'
  },
  {
    id: 4,
    name: 'Kupa',
    fcolor: 'Blue',
    weight: '999.99',
    fshow: 'Breaking Bad'
  }
];

// conectarse a la db
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    // si nos conectamos con exito mostrar mensajes
    // e insertar los usuarios en el array
    console.log(`DB connected @ ${db}`);
    console.log('Populating DB...');
    user.insertMany(users, (err, users) => {
      if (err) throw err;
      // un mensaje con la cantidad de documentos insertados
      console.log(`${users.length} documents inserted!`);
      // cerramos la conexion cuando terminamos
      mongoose.connection.close();
    });
  })
  .catch(err => console.error(`Connection error ${err}`));