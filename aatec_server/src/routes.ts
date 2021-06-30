import {Request, Response, Router} from 'express';
import { AssociateController } from './controllers/AssociateController';
import { AuthController } from './controllers/AuthController';
import authMiddleware from './middlewares/authMiddleware';


const router = Router();

const associateController = new AssociateController();
const authController = new AuthController();

router.get("/", function(req: Request, res: Response) {
  res.send('Hello, World! :D');
})

router.post("/associates", authMiddleware ,associateController.store)
router.get("/test", authMiddleware ,associateController.index)
router.post("/auth", authController.authenticate)
router.get("/show", authMiddleware ,associateController.show)
router.get("/update", authMiddleware ,associateController.update)

export {router};