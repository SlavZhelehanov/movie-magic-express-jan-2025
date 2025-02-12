import { Schema, model, Types } from "mongoose";

const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, "The title can't be empty"],
        minLength: [5, "The title should be at least 5 characters long"],
        match: [/^[a-zA-Z 0-9]+$/, "The title should be alphanumeric, digits and white spaces only!"]
    },
    category: {
        type: String,
        required: [true, "The category can't be empty"],
        minLength: [5, "The category should be at least 5 characters long"],
        match: [/^[a-zA-Z 0-9]+$/, "The category should be alphanumeric, digits and white spaces only!"]
    },
    genre: {
        type: String,
        required: [true, "The genre can't be empty"],
        minLength: [5, "The genre should be at least 5 characters long"],
        match: [/^[a-zA-Z 0-9]+$/, "The genre should be alphanumeric, digits and white spaces only!"]
    },
    director: {
        type: String,
        required: [true, "The director can't be empty"],
        minLength: [5, "The director should be at least 5 characters long"],
        match: [/^[a-zA-Z 0-9]+$/, "The director should be alphanumeric, digits and white spaces only!"]
    },
    year: {
        type: Number,
        required: [true, "The year is required"],
        min: 1900,
        max: 2025
    },
    image: {
        type: String,
        required: [true, "The image can't be empty"],
        match: [/^https?:\/\//, "The image url should start with http:\/\/ or https:\/\/!"]
    },
    rating: {
        type: Number,
        required: [true, "The year is required"],
        min: 1,
        max: 5
    },
    description: {
        type: String,
        required: [true, "The description can't be empty"],
        minLength: [20, "The description should be at least 5 characters long"],
        match: [/^[a-zA-Z 0-9]+$/, "The description should be alphanumeric, digits and white spaces only!"]
    },
    casts: [{ type: Types.ObjectId, ref: "Cast" }],
    creator: { type: Types.ObjectId, ref: "User" }
}, { timestamps: true });

const Movie = model("Movie", movieSchema);

export default Movie;