import express, { Request, Response } from 'express';
import morgan from 'morgan';

const PORT = process.env.PORT || 9000;

const app = express();

app.use(morgan('dev'))

app.use('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello World!' });
})


app.listen(PORT, () => {
    console.log(`Sever listening on PORT: ${PORT}`)
})


