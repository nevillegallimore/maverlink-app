// import internal dependencies
import environment from './environment';

////////////////////////////////////////////////////////////////////////////////////////////////////

export const config = Object.freeze({
    api: environment.api,
    database: environment.database,
    server: environment.server,
});

////////////////////////////////////////////////////////////////////////////////////////////////////

export default config;
