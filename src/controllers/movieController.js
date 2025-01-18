import { Router } from "express";
import movies from "../movieDB.js";

const movieController = Router();

movieController.get("/create", (req, res) => { return res.render("create", { title: "Create" }); });

movieController.get("/about", (req, res) => { return res.render("about", { title: "About" }); });

movieController.get("/:id/details", (req, res) => { return res.render("details", { title: "Details", movie: movies.find(id => id === req.params.id) }); });

export default movieController;