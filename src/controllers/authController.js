import { Router } from "express";

const authController = Router();

// REGISTER
authController.get("/register", (req, res) => { return res.render("auth/register", { title: "Register" }) });

authController.post("/register", async (req, res) => {
    let { email, password, confirm } = req.body;
    email = email.trim(); password = password.trim(); confirm = confirm.trim();

    console.log(`Email: ${email}; Password: ${password}; Repeat-password: ${confirm}`);

    return res.end();
    return res.render("auth/register", { title: "Register" })
});

export default authController;