import { Router } from "express";

import homeController from "./controllers/homeController.js";
import movieController from "./controllers/movieController.js";
import castController from "./controllers/casatController.js";
import authController from "./controllers/authController.js";

const routes = Router();

routes.use("/", homeController);

routes.use("/movie", movieController);

routes.use("/casts", castController);

routes.use("/auth", authController);

routes.all("*", (req, res) => { return res.render("404", { title: "404" }); });

export default routes;