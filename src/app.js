import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv"

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT||8080;
const MONGO_URI = process.env.MONGO_URI;



app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);



mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Conectado a MongoDB Atlas");
        app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
    })
    .catch(err => console.error("Error de conexión a Mongo:", err));

