import express from "express";
import { engine } from "express-handlebars";

import homeController from "./controllers/homeController.js";

const app = express();

app.use("/static", express.static("src/public"));

app.engine("hbs", engine({
    extname: "hbs"
}));
app.set("view engine", "hbs");
app.set("views", "./src/views");

app.use("/", homeController);
app.all("*", (req, res) => { return res.render("404", { title: "404" }); });

app.listen(3000, console.log("Server is listening on port: 3000..."));