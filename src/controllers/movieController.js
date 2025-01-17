import { Router } from "express";

const movieController = Router();

movieController.get("/create", (req, res) => { return res.render("create", { title: "Create" }); });

movieController.get("/about", (req, res) => { return res.render("about", { title: "About" }); });

export default movieController;