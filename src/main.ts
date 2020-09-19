import express, { Request, Response } from 'express';
import morgan from 'morgan';
import router from './routes';

const PORT = process.env.PORT || 9000;

const app = express();

app.use(morgan('dev'))

app.use('/', router)


app.listen(PORT, () => {
    console.log(`Sever listening on PORT: ${PORT}`)
})


