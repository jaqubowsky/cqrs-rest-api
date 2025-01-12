import express from "express";
import v1Router from "./routes/v1.router";

export const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/v1", v1Router);
