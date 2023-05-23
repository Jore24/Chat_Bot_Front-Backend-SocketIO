import Router from 'express';
import { userLogin, userRegister} from '../src/components/Login';
import { Home } from '../src/Home.js';

export const authRouter = Router();

authRouter.post('/register', userRegister);
authRouter.post('/login', userLogin);
authRouter.get('/home', Home);
