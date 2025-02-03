import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    email: { type: String, required: [true, "Email is required"] },
    password: { type: String, required: [true, "Password is required"] }
});

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 10);
});

export default model("User", userSchema);