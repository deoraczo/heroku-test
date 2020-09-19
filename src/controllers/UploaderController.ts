import { FileStorage } from "../services/FileStorage";
import { lazyInject } from "../ioc/container";
import { TYPES } from "../ioc/types";
import { Request, Response } from 'express'

class UploaderController {

    @lazyInject(TYPES.FIREBASE_FILE_STORAGE)
    private fileStorage!: FileStorage;

    saveUploaded = (req: Request, res: Response) => {
        this.fileStorage.saveUploaded('pere');
        return res.json({ message: "Image uploaded successfully." });
    }
}


export const uploaderController = new UploaderController();