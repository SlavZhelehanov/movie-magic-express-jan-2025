import movies from "../movieDB.js";
import { v4 as uuid } from "uuid";

export default {
    getAll() { return movies },
    findOne(id) {
        let movie = movies.find(movie => movie.id === id), rating = '';
        for (let i = 0; i < Math.round(movie.rating); i++) rating += "★"
        movie.rating = rating;
        return movie;
    },
    create(data) {
        movies.push({ id: uuid(), ...data });
        return uuid();
    }
}