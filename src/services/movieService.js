// import movies from "../movieDB.js";
import { v4 as uuid } from "uuid";
import Movie from "../models/Movie.js";

export default {
    getAll(filter = {}) {
        // let result = [...movies];
        let result = Movie.find({});

        // if (filter.search) result = [...result.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()))];
        // if (filter.genre) result = [...result.filter(movie => movie.genre.toLowerCase() === filter.genre.toLowerCase())];
        // if (filter.year) result = [...result.filter(movie => movie.year === +filter.year)];

        return result;
    },
    findOne(id) {
        // const movie = movies.find(movie => movie.id === id);
        const movie = Movie.findById(id);
        // movie.rating = "★".repeat(Math.round(movie.rating));
        return movie;
    },
    create(data) {
        // movies.push({ id: uuid(), ...data });
        // movies.push({ id: uuid(), ...data });
        return uuid();
    }
}