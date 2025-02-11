import { Router } from "express";
import movieService from "../services/movieService.js";
import castService from "../services/castService.js";

const movieController = Router();

// CREATE
movieController.get("/create", (req, res) => { return res.render("create", { title: "Create" }); });

movieController.post("/create", async (req, res) => {
    await movieService.create({ ...req.body, year: +req.body.year, rating: +req.body.rating, creator: req.user?.id });
    return res.redirect("/");
});

// DETAILS
movieController.get("/:id/details", async (req, res) => {
    let movie = await movieService.getOneWithCasts(req.params.id);
    const isCreator = req.user && movie.creator.equals(req.user.id);
    const rating = "★".repeat(Math.round(movie.rating));

    return res.render("movie/details", { title: "Details", movie, rating, isCreator });
});

// SEARCH
movieController.get("/search", async (req, res) => {
    const filter = req.query;
    const movies = await movieService.getAll(filter);
    return res.render("search", { title: "Search", movies, filter });
});

// ATTACH CAST
movieController.get("/:id/attachCast", async (req, res) => {
    let movie = await movieService.findOne(req.params.id);
    let casts = await castService.getAll({ exclude: movie.casts });
    return res.render("movie/attachCast", { title: "Attach Cast", movie, casts });
});

movieController.post("/:id/attachCast", async (req, res) => {
    await movieService.attachCast(req.params.id, req.body.cast);
    return res.redirect(`/movie/${req.params.id}/details`);
});

// DELETE MOVIE
movieController.delete("/:id/delete", async (req, res) => {
    const movie = await movieService.findOne(req.params.id);

    if (!movie.creator?.equals(req.user?.id)) return res.redirect("/404");

    await movieService.delete(req.params.id);

    return res.redirect("/");
});

// EDIT MOVIE
function getCategoriesViewData(category) {
    const categoriesMap = {
        "tv-show": "Tv-show",
        "animation": "Animation",
        "movie": "Movie",
        "documentary": "Documentary",
        "short-film": "Short-film"
    }

    const categories = Object.keys(categoriesMap).map(value => ({
        value,
        label: categoriesMap[value],
        selected: value === category ? "selected" : ''
    }));

    return categories;
}

movieController.get("/:id/edit", async (req, res) => {
    const movie = await movieService.findOne(req.params.id);

    const categories = getCategoriesViewData(movie.category);

    return res.render("movie/edit", { movie, categories });
});

movieController.put("/:id/edit", async (req, res) => {
    const movie = await movieService.findOne(req.params.id);

    if (!movie.creator?.equals(req.user?.id)) return res.redirect("/404");

    await movieService.update(req.params.id, req.body);

    return res.redirect(`/movie/${req.params.id}/details`);
});

export default movieController;