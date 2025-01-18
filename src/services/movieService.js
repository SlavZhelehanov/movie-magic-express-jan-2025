import movies from "../movieDB.js";
import { v4 as uuid } from "uuid";

export default {
    getAll() { return movies },
    findOne(id) {
        const movie = movies.find(movie => movie.id === id);
        movie.rating = "★".repeat(Math.round(movie.rating));
        return movie;
    },
    create(data) {
        movies.push({ id: uuid(), ...data });
        return uuid();
    }
}