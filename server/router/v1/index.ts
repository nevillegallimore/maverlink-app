// import external dependencies
import { Response, Request, Router } from 'express';

// import internal dependencies
import config from '../../config';

////////////////////////////////////////////////////////////////////////////////////////////////////

const router: Router = Router();

router.get('/', (request: Request, response: Response) => {
    const payload = {
        data: config,
        status: 200,
        success: true,
    };

    response.status(payload.status).json(payload);
});

////////////////////////////////////////////////////////////////////////////////////////////////////

export default router;
