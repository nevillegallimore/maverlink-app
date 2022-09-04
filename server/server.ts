// import external dependencies
import express, { Express, Response, Request } from 'express';

// import system dependencies
import path from 'path';

// import internal dependencies
import config from '@server/config';
import router from '@server/router';

////////////////////////////////////////////////////////////////////////////////////////////////////

const server: Express = express();

server.disable('x-powered-by');

server.use(express.static('build'));
server.use(express.json());
server.use(`${config.api.path}*`, router.version(config.api.version));

server.get('/', (request: Request, response: Response) => {
    response.sendFile(path.resolve(__dirname, './index.html'));
});

server.get('*', (request: Request, response: Response, next: express.NextFunction) => {
    console.log('[DEBUG] Received request:', { apiPath: config.api.path, path: request.path }); // DEBUG
    next();
});

server.listen(config.server.port, () => {
    console.log(`Server running @ ${config.server.url}/.`);
});

server.on('error', (error: any) => {
    console.error('Sorry, an error has occured:');
    console.error(error?.message || error);
});

////////////////////////////////////////////////////////////////////////////////////////////////////
