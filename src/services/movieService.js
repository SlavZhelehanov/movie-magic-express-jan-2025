// import movies from "../movieDB.js";
// import { v4 as uuid } from "uuid";
import Movie from "../models/Movie.js";

export default {
    getAll(filter = {}) {
        // let result = [...movies];
        let result = Movie.find({});

        // if (filter.search) result = [...result.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()))];
        // if (filter.genre) result = [...result.filter(movie => movie.genre.toLowerCase() === filter.genre.toLowerCase())];
        // if (filter.year) result = [...result.filter(movie => movie.year === +filter.year)];

        if (filter.search) {
            result = result.where({ title: filter.search });
        }
        if (filter.genre) {
            result = result.where({ genre: filter.genre });
        }
        if (filter.year) {
            result = result.where({ year: +filter.year });
        }

        return result;
    },
    findOne(id) {
        // const movie = movies.find(movie => movie.id === id);
        const movie = Movie.findById(id);
        // movie.rating = "★".repeat(Math.round(movie.rating));
        return movie;
    },
    getOneWithCasts(id) {
        return this.findOne(id).populate("casts");
    },
    create(data) {
        const newMovie = Movie.create(data);
        return newMovie;
        // movies.push({ id: uuid(), ...data });
        // movies.push({ id: uuid(), ...data });
        // return uuid();
    },
    async attachCast(movieId, castId) {
        // Attach #1
        // const movie = await Movie.findById(movieId);
        // movie.casts.push(castId);
        // await movie.save();
        // return movie;

        // Attach #2
        return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
    }
}