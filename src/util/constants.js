export const DB_URI = "mongodb://127.0.0.1:27017/movie-magic-jan2015";

export const JWT_SECRET = "V1PkFkTB3J7HWL3o87zYzsOugcHTC/IXKHh9lSW4+7Q=";

export const PORT = process.env.PORT || 3000;

export const COOKIE_NAME = "auth";

// Generate "secret"
// import { randomBytes } from "crypto";
// randomBytes(32, (err, buff) => { console.log(buff.toString("base64")); });