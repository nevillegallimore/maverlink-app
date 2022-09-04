// import external dependencies
import dotenv from 'dotenv';

// import internal dependencies
import pkg from '../../package.json';

////////////////////////////////////////////////////////////////////////////////////////////////////

// load environment variables
dotenv.config();

const SERVER = {
    HOST: process.env.SERVER_HOST || process.env.HOST || 'localhost',
    PORT: parseInt(process.env.SERVER_PORT || process.env.PORT || '3000', 10),
    SCHEMA: process.env.SERVER_SCHEMA || process.env.SCHEMA || 'http',
};

const API = {
    VERSION: parseInt(process.env.API_VERSION || '1', 10),
};

const DATABASE = {};

////////////////////////////////////////////////////////////////////////////////////////////////////

export const getServerUrl = () => {
    if (SERVER.SCHEMA === 'http' && SERVER.PORT === 80) {
        return `${SERVER.SCHEMA}://${SERVER.HOST}`;
    }

    if (SERVER.SCHEMA === 'https' && SERVER.PORT === 443) {
        return `${SERVER.SCHEMA}://${SERVER.HOST}`;
    }

    return `${SERVER.SCHEMA}://${SERVER.HOST}:${SERVER.PORT}`;
};

export const environment = Object.freeze({
    api: Object.freeze({
        path: `/api/v${API.VERSION}`,
        version: API.VERSION,
        url: `${getServerUrl()}/api/v${API.VERSION}/`,
    }),
    database: Object.freeze({}),
    server: Object.freeze({
        author: pkg.author,
        contributors: pkg.contributors,
        host: SERVER.HOST,
        port: SERVER.PORT,
        schema: SERVER.SCHEMA,
        url: getServerUrl(),
        version: pkg.version,
    }),
});

////////////////////////////////////////////////////////////////////////////////////////////////////

export default environment;
