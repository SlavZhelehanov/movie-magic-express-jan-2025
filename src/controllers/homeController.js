import { Router } from "express";
import movieService from "../services/movieService.js";

const router = Router();

// HOME
router.get("/", async (req, res) => { 
    const movies = await movieService.getAll();
    
    return res.render("home", { title: "Catalog", movies }); 
});

// ABOUT
router.get("/about", (req, res) => { return res.render("about", { title: "About" }); });

export default router;