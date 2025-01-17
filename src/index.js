import express from "express";
import { engine } from "express-handlebars";

import routes from "./routes.js";

const app = express();

app.use("/static", express.static("src/public"));

app.engine("hbs", engine({
    extname: "hbs"
}));
app.set("view engine", "hbs");
app.set("views", "./src/views");

app.use(routes);

app.listen(3000, console.log("Server is listening on port: 3000..."));