import { Schema, model } from "mongoose";

const castSchema = new Schema({
    name: String,
    age: Number,
    born: String,
    image: String,
}, { timestamps: true });

const Cast = model("Cast", castSchema);

export default Cast;