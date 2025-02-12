import { Schema, model } from "mongoose";

const castSchema = new Schema({
    name: {
        type: String,
        required: [true, "The name can't be empty"],
        minLength: [5, "The name should be at least 5 characters long"],
        match: [/^[a-zA-Z 0-9]+$/, "The name should be alphanumeric, digits and white spaces only!"]
    },
    age: {
        type: Number,
        min: 1,
        max: 120
    },
    born: {
        type: String,
        required: [true, "The born can't be empty"],
        minLength: [10, "The born should be at least 5 characters long"],
        match: [/^[a-zA-Z 0-9]+$/, "The born should be alphanumeric, digits and white spaces only!"]
    },
    image: {
        type: String,
        required: [true, "The image can't be empty"],
        match: [/^https?:\/\//, "The image url should start with http:\/\/ or https:\/\/!"]
    },
}, { timestamps: true });

const Cast = model("Cast", castSchema);

export default Cast;