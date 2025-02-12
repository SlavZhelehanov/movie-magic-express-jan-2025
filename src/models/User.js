import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        match: [/\@[a-zA-Z]+.[a-zA-Z]+$/, "Email should end in @x.x, where x is one ot more English letters/digits"],
        minLength: [10, "Email should be at least 10 characters long"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        match: /^[a-zA-Z0-9]+$/,
        minLength: 6
    }
});

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 10);
});

export default model("User", userSchema);