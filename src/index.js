import express from "express";

const app = express();

app.get("/", (req, res) => { return res.send("It Works!!!"); });

app.listen(3000, console.log("Server is listening on port: 3000..."));