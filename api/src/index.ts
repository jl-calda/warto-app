import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";

import router from "./router";

const app = express();
app.use(cors({ credentials: true }));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("Server started on port 8000");
});

const MONGO_CONNECTION_STRING =
  "mongodb+srv://jlcalda23:Exc%40libur23@cluster0.2ebbosu.mongodb.net/warto";

mongoose.Promise = Promise;
mongoose.connect(MONGO_CONNECTION_STRING);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
