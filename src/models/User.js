import mongoose from "mongoose";

export default mongoose.model("User", new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
}));