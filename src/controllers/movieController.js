import { Router } from "express";
import movieService from "../services/movieService.js";

const movieController = Router();

// CREATE
movieController.get("/create", (req, res) => { return res.render("create", { title: "Create" }); });

movieController.post("/create", (req, res) => {
    console.log(req.body);

});

// DETAILS
movieController.get("/:id/details", (req, res) => { return res.render("details", { title: "Details", movie: movieService.findOne(req.params.id) }); });

export default movieController;