import { FileStorage } from "./FileStorage";
import { injectable } from "inversify";

@injectable()
export class FirebaseStorage implements FileStorage {

    saveUploaded(string: String): void {
        console.log('Save uploaded in Firebase')
    }

}