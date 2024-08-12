import express from 'express';
import bodyParser from 'body-parser';
import todoRoutes from './routes/todoRoutes';

const app = express();

app.use(bodyParser.json());
app.use('/api', todoRoutes);

export default app;
