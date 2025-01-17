import { Router } from "express";
import movies from "../movieDB.js";

const router = Router();

router.get("/", (req, res) => { return res.render("home", { title: "Catalog", movies }); });

router.get("/about", (req, res) => { return res.render("about", { title: "About" }); });

export default router;