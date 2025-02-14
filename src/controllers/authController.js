import { Router } from "express";
import authService from "../services/authService.js";
import { COOKIE_NAME } from "../util/constants.js";
import { isGuest, isUser } from "../middlewares/auth-middleware.js";
import { errorParser } from "../util/errorParser.js";

const authController = Router();

// REGISTER
authController.get("/register", isGuest, (req, res) => { return res.render("auth/register", { title: "Register" }) });

authController.post("/register", isGuest, async (req, res) => {
    try {
        let { email, password, confirm } = req.body;
        email = email.trim(); password = password.trim(); confirm = confirm.trim();

        if (password != confirm) throw ["Pasword must be equal to confirm password"];

        await authService.register({ email, password });

        return res.redirect("/auth/login");
    } catch (error) {
        return res.render("auth/register", { title: "Register", messages: errorParser(error) });
    }
});

// LOGIN
authController.get("/login", isGuest, (req, res) => { return res.render("auth/login", { title: "Login" }) });

authController.post("/login", isGuest, async (req, res) => {
    let { email, password } = req.body;
    email = email.trim(); password = password.trim();

    try {
        const token = await authService.login(email, password);

        res.cookie(COOKIE_NAME, token, { httpOnly: true });
        return res.redirect("/");
    } catch (error) {
        return res.render("auth/login", { title: "Login", messages: errorParser(error) })
    }
});

// LOGOUT
authController.delete("/logout", isUser, (req, res) => {
    res.clearCookie(COOKIE_NAME);
    return res.redirect("/");
});

export default authController;