import { Router } from "express";
import movieService from "../services/movieService.js";

const router = Router();

router.get("/", (req, res) => { 
    const movies = movieService.getAll();
    
    return res.render("home", { title: "Catalog", movies }); 
});

router.get("/about", (req, res) => { return res.render("about", { title: "About" }); });

export default router;