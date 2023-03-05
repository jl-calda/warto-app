import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import router from "./router";

dotenv.config();
const app = express();
app.use(cors({ credentials: true }));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);
const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Server started on port ${8000}`);
});

const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

mongoose.Promise = Promise;
mongoose.connect(MONGO_CONNECTION_STRING);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
