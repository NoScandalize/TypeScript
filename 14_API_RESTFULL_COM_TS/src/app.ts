// ENV variables
require("dotenv").config();

import chalk from "chalk";
import express from "express";
import config from "config";

// Routes
import router from "./router";

// DB
import db from "../config/db";

// Logger
import Logger from "../config/logger"

// Moddlewares
import morganMiddleware from "./middleware/morganMiddleware";

const app = express();

// JSON middleware
app.use(express.json());

app.use(morganMiddleware);

app.use("/api/", router);

// app port
const port = config.get<number>("port");

app.listen(port, async () => {

    console.clear();
    await db();

    Logger.info(`Aplicação iniciada com sucesso na porta ${port}`)
})