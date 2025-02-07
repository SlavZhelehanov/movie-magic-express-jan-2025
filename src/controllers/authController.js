import { Router } from "express";
import authService from "../services/authService.js";
import { COOKIE_NAME } from "../util/constants.js";

const authController = Router();

// REGISTER
authController.get("/register", (req, res) => { return res.render("auth/register", { title: "Register" }) });

authController.post("/register", async (req, res) => {
    let { email, password, confirm } = req.body;
    email = email.trim(); password = password.trim(); confirm = confirm.trim();

    if (password === confirm) await authService.register({ email, password });

    return res.redirect("/auth/login");
});

// LOGIN
authController.get("/login", (req, res) => { return res.render("auth/login", { title: "Login" }) });

authController.post("/login", async (req, res) => {
    let { email, password } = req.body;
    email = email.trim(); password = password.trim();

    try {
        const token = await authService.login(email, password);
        res.cookie(COOKIE_NAME, token, { httpOnly: true });
        return res.redirect("/");
    } catch (error) {
        console.log(error.message);
        return res.redirect("/404");
    }
});

export default authController;