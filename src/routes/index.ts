import { Router } from 'express';
import { uploaderController } from '../controllers/UploaderController';

const router = Router();

router.route('/')
    .get(uploaderController.saveUploaded)

export default router;