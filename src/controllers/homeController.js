import {Router} from "express";

const router = Router();

router.get("/", (req, res) => { return res.render("home", { title: "Catalog" }); });

router.get("/about", (req, res) => { return res.render("about", { title: "About" }); });

export default router;