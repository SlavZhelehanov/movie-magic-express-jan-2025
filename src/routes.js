import { Router } from "express";

import homeController from "./controllers/homeController.js";
import movieController from "./controllers/movieController.js";

const routes = Router();

routes.use("/", homeController);

routes.use("/movie", movieController);

routes.all("*", (req, res) => { return res.render("404", { title: "404" }); });

export default routes;