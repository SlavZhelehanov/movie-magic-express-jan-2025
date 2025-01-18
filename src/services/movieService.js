import movies from "../movieDB.js";

export default {
    findOne(id) {
        let movie = movies.find(movie => movie.id === id), rating = '';
        for (let i = 0; i < Math.round(movie.rating); i++) rating += "★"
        movie.rating = rating;
        return movie;
    }
}