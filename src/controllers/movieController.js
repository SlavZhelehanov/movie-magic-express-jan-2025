import { Router } from "express";
import movieService from "../services/movieService.js";

const movieController = Router();

movieController.get("/create", (req, res) => { return res.render("create", { title: "Create" }); });

movieController.get("/about", (req, res) => { return res.render("about", { title: "About" }); });

movieController.get("/:id/details", (req, res) => { return res.render("details", { title: "Details", movie: movieService.findOne(req.params.id) }); });

export default movieController;