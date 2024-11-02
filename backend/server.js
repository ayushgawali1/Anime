import express from "express";
import 'dotenv/config';
import cors from 'cors';
import dbConnect from "./config/dbConnect.js";
import animeRoute from "./routes/animeRoute.js";
import userRoute from "./routes/userRoute.js";

const app = express();
const port = process.env.PORT;
app.use(cors());

app.use(express.json());

// connecting Data Base
await dbConnect();

// Routes

// anime Route
app.use("/anime",animeRoute);

app.use("/user",userRoute);
app.get("/",(req,res) => {
    res.send("<h1>Hell</h1>");
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})
