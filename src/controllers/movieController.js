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
movieController.get("/:id/details", async (req, res) => {
    let movie = await movieService.findOne(req.params.id);
    movie.rating = "★".repeat(Math.round(movie.rating));
    return res.render("details", { title: "Details", movie });
});

// SEARCH
movieController.get("/search", async (req, res) => {
    const filter = req.query;
    const movies = await movieService.getAll(filter);
    return res.render("search", { title: "Search", movies, filter });
});

export default movieController;