import express from "express";
import { engine } from "express-handlebars";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import session from "express-session";

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import routes from "./routes.js";
import { authMiddleware } from "./middlewares/auth-middleware.js";
import { DB_URI, PORT } from "./util/constants.js";
import { methodOverride } from "./middlewares/methodOverride.js";
import { tempData } from "./middlewares/tempDataMiddleware.js";
// import { flash } from "./middlewares/flash.js";

const app = express();

try {
    await mongoose.connect(DB_URI);
    console.log("DB is connected");
} catch (dbConnectionErr) {
    console.error("DB connection error: ", dbConnectionErr.message);
}

// app.use("/static", express.static("src/public"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'SuperMegaGigaSecret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true }
}));
// app.use(flash);
app.use(tempData);
app.use(methodOverride);
app.use(authMiddleware);

app.engine("hbs", engine({
    extname: "hbs",
    runtimeOptions: { allowProtoPropertiesByDefault: true } // Instead adding .lean() after calling mongoose models
}));
app.set("view engine", "hbs");
app.set("views", "./src/views");

app.use(routes);

app.listen(PORT, console.log(`Server is listening on port: ${PORT}...`));