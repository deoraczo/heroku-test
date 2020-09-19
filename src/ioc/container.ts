import 'reflect-metadata';
import { Container } from 'inversify';
import getDecorators from 'inversify-inject-decorators'
import { TYPES } from './types';
import { FileStorage } from '../services/FileStorage';
import { LocalFileStorage } from '../services/LocalFileStorage';
import { FirebaseStorage } from '../services/FirebaseFileStorage';

const container = new Container();

container.bind<FileStorage>(TYPES.LOCAL_FILE_STORAGE).to(LocalFileStorage);
container.bind<FileStorage>(TYPES.FIREBASE_FILE_STORAGE).to(FirebaseStorage);

export const { lazyInject } = getDecorators(container);