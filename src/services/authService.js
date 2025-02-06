import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET = "o;nNSDAOUIWNrenlksdfknAlWQE9314E1234E0-==-12E33 ;LKMpdmas932";

export default {
    register(data) {
        return User.create(data);
    },
    async login(email, password) {
        const user = await User.findOne({ email });
        if (!user) throw new Error("Invalid email or password");

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) throw new Error("Invalid email or password");

        const payload = {
            id: user.id,
            email: user.email
        }
        const token = jwt.sign(payload, SECRET, { expiresIn: "2h" });

        return token;
    }
};