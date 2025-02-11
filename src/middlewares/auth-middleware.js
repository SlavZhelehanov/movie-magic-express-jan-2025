import jwt from "jsonwebtoken";
import { COOKIE_NAME, JWT_SECRET } from "../util/constants.js";

export const authMiddleware = (req, res, next) => {
    const token = req.cookies[COOKIE_NAME];

    if (!token) return next();

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        res.locals.user = decoded;
        return next();
    } catch (err) {
        res.clearCookie(COOKIE_NAME);
        delete req.user;
        delete res.locals.user;
        return res.redirect("/auth/login");
    }
};