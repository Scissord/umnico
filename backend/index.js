
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import route from './routes/route.js';

import printName from "./helpers/printName.js";

const app = express();
const PORT = process.env.PORT || 8000; 

dotenv.config();

app.use(express.json());
app.use(cookieParser()); // middleware

app.use('/api/', route);

app.listen(PORT, () => {
	printName();
	console.log(`Welcome to NCode server, port ${PORT} ✅✅✅`);
});
