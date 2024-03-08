require('dotenv').config();
const app = require('./app');
const connectDb = require('./db/mongodb')
const { appConfig, dbConfig } = require('./config');


async function initApp(port, dbConfig) {
    try {
        await connectDb(dbConfig);
        app.listen(port, () => console.log(`Servidor levantado http://localhost:${appConfig.port}`))
    }
    catch(error) {
        console.error(error);
        process.exit(0);
    }
}

const port = process.env.PORT || appConfig.port;

initApp(port, dbConfig);