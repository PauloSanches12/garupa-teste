import "reflect-metadata";
import express, { json } from "express";
import "./database";
import { routes } from "./routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(json());

app.use(routes);

const port = process.env.PORT || 3333;

app.listen(port, () => console.log("Server is running"));