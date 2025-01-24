import express from "express";
import { engine } from "express-handlebars";
import mongoose from "mongoose";

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import routes from "./routes.js";

const app = express();
const DB_URI = "mongodb://localhost:27017/movie-magic-jan2015"

try {
    await mongoose.connect(DB_URI);
    console.log("DB is connected");
} catch (dbConnectionErr) {
    console.error("DB connection error: ", dbConnectionErr.message);
}

// app.use("/static", express.static("src/public"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.engine("hbs", engine({
    extname: "hbs",
    runtimeOptions: { allowProtoPropertiesByDefault: true } // Instead adding .lean() after calling mongoose models
}));
app.set("view engine", "hbs");
app.set("views", "./src/views");

app.use(routes);

app.listen(3000, console.log("Server is listening on port: 3000..."));