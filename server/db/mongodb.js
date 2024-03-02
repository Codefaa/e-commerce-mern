const mongoose = require('mongoose');

mongoose.connection.on('open', () => console.log('Base de datos conectada'));

async function connectDb({ host, port, dbName }) {
    const uri = `mongodb://${host}:${port}/${dbName}`;
    await mongoose.connect(uri);
}

module.exports = connectDb;