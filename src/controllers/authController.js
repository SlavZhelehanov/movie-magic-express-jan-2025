import { Router } from "express";
import authService from "../services/authService.js";

const authController = Router();

// REGISTER
authController.get("/register", (req, res) => { return res.render("auth/register", { title: "Register" }) });

authController.post("/register", async (req, res) => {
    let { email, password, confirm } = req.body;
    email = email.trim(); password = password.trim(); confirm = confirm.trim();

    if (password === confirm) await authService.register({ email, password });

    return res.end();
    return res.render("auth/register", { title: "Register" })
});

export default authController;