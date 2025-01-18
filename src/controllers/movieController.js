import { Router } from "express";
import movieService from "../services/movieService.js";

const movieController = Router();

// CREATE
movieController.get("/create", (req, res) => { return res.render("create", { title: "Create" }); });

movieController.post("/create", (req, res) => {
    movieService.create({ ...req.body, year: +req.body.year, rating: +req.body.rating });
    return res.redirect("/");
});

// DETAILS
movieController.get("/:id/details", (req, res) => { return res.render("details", { title: "Details", movie: movieService.findOne(req.params.id) }); });

// SEARCH
movieController.get("/search", (req, res) => { return res.render("search", { title: "Search", movies: movieService.getAll(req.query) }); });

export default movieController;