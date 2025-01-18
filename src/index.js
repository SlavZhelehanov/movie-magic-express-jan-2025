import express from "express";
import { engine } from "express-handlebars";

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import routes from "./routes.js";

const app = express();

// app.use("/static", express.static("src/public"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.engine("hbs", engine({
    extname: "hbs"
}));
app.set("view engine", "hbs");
app.set("views", "./src/views");

app.use(routes);

app.listen(3000, console.log("Server is listening on port: 3000..."));