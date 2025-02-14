import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../util/constants.js";

export default {
    register(data) {
        return User.create(data);
    },
    async login(email, password) {
        let messages = [];

        if (!email || email.length < 1) messages.push("The email's field cant't be empty");
        if (!password || password.length < 1) messages.push("The password's field cant't be empty");
        if (0 < messages.length) throw messages;
        
        const user = await User.findOne({ email });
        if (!user) throw new Error("Invalid email or password");

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) throw new Error("Invalid email or password");

        const payload = {
            id: user.id,
            email: user.email
        }
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "2h" });

        return token;
    }
};