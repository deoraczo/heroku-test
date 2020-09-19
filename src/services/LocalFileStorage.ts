import { FileStorage } from "./FileStorage";
import { injectable } from "inversify";

@injectable()
export class LocalFileStorage implements FileStorage {


    saveUploaded(string: String): void {
        console.log('Save upload in Local Storage')
    }

}