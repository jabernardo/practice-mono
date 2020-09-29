import { Router } from 'express';
import { addAsync } from '@awaitjs/express';

const router = addAsync(Router());

import HomeController from '../controllers/HomeController';

const homeController = new HomeController();

router.get('/', homeController.index.bind(homeController));

export default router;