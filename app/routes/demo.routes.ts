import express, { Request, Response } from 'express';
import { demoController } from '../controller';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    await demoController(req, res);
});

export default router;
