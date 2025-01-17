import express from "express";
import { engine } from "express-handlebars";

const app = express();

app.use("/static", express.static("src/public"));

app.engine("hbs", engine({
    extname: "hbs"
}));
app.set("view engine", "hbs");
app.set("views", "./src/views");

app.get("/", (req, res) => { return res.render("home", { title: "Catalog" }); });
app.get("/about", (req, res) => { return res.render("about", { title: "About" }); });

app.listen(3000, console.log("Server is listening on port: 3000..."));