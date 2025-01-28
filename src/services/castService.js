import Cast from "../models/Cast.js";

export default {
    getAll() {
        return Cast.find({});
    },
    create(data) {
        return Cast.create(data);
    }
}