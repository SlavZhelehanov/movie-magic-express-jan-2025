import movies from "../movieDB.js";

export default {
    findOne(id) { return movies.find(movie => movie.id === id); }
}